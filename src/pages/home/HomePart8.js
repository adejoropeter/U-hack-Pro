import React, { useState,useRef } from "react";
import CustomButton from "../../components/CustomButton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const HomePart8 = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [focus1, setFocus] = useState("");
  const [showSuc, setShowSuc] = useState(false);
  const [showErrMsg, setShowErrorMsg] = useState(null);
  const [errMsg, setErrorMsg] = useState("");
  const fiName=useRef('')
  const handleSubmit = () => {
    if (fiName.current.value === "") {
      setShowErrorMsg(
        setTimeout(() => {
       setFocus(false)
       setErrorMsg("Please fill out the field");
        }, 500)
      );
    } else {
      setShowSuc(true);
      console.log("done");
    }
  };
  setTimeout(() => {
    setFocus(true)
   
  }, 2000);
  return (
    <div className="w-screen flex gap-4 py-10  flex-col-reverse  md:flex-row md:items-center px-10">
      <div className="w-full md:w-1/2 ">
        <img src="/assets/donation-box.png" />
      </div>
      <div
        className="w-full md:w-1/2 sm:px-10 flex
      flex-col"
      >
        <div className="w-full ">
          <h2 className="text-2xl text-[#1B1A42] mb-6">Join Us</h2>
          <p className="text-[rgba(0,0,0,0.6)] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </p>
        </div>
        <form className="w-full " method="POST">
          <div className=" mb-4 flex gap-2 flex-col sm:flex-row mr-4 w-full sm:w-full">
            <input
              onChange={(e) => setFullName(e.target.value)}
              ref={fiName}
              value={fullName}
              name="full name"
              placeholder="Full Name"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
            <input
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              ref={fiName}
              type="number"
              name="phone number"
              placeholder="Phone Number"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
          </div>
          <div className=" mb-4 gap-2 flex flex-col sm:flex-row mr-4 w-full sm:w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={fiName}
              name="email address"
              placeholder="Email Address"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
            <input
              onChange={(e) => setLocation(e.target.value)}
              ref={fiName}
              value={location}
              name="location"
              placeholder="Location"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              placeholder="Tell us about yourself and why you want to join us"
              className="resize-none h-[232px] p-2 w-full text-sm text-[rgba(0,0,0,0.4)] bg-[#DBDAF1]"
              ref={fiName}
            />
          </div>
          <CustomButton pad="0 15px" isBool={true} bg="#1B1A42" text="white">
            Volunteer
          </CustomButton>
          <div
            // ref={focus}
            className={`${
              focus1 ? "hidden" : "block"
            } fixed bottom-10 left-[50%] bg-[#1B1A42] text-white  p-3 rounded-full`}
          >
            {errMsg}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePart8;
