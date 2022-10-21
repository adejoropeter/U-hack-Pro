import React from "react";
import CustomButton from "../../components/CustomButton";
import { useQuery } from "@tanstack/react-query";
const HomePart8 = () => {
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
        <form className="w-full " action="">
          <div className=" mb-4 flex gap-2 flex-col sm:flex-row mr-4 w-full sm:w-full">
            <input
              // ref={fiName}
              name="full name"
              placeholder="Full Name"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
            <input
              // ref={fiName}
              name="phone number"
              placeholder="Phone Number"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
          </div>
          <div className=" mb-4 gap-2 flex flex-col sm:flex-row mr-4 w-full sm:w-full">
            <input
              // ref={fiName}
              name="email address"
              placeholder="Email Address"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
            <input
              // ref={fiName}
              name="location"
              placeholder="Location"
              className="h-10 p-2 w-full sm:w-1/2 text-[rgba(0,0,0,0.4)] bg-[#DBDAF1] text-sm"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about yourself and why you want to join us"
              className="resize-none h-[232px] p-2 w-full text-sm text-[rgba(0,0,0,0.4)] bg-[#DBDAF1]"
              // ref={fiName}
            />
          </div>
          <CustomButton  pad="0 15px" isBool={true} bg="#1B1A42" text="white">Volunteer</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default HomePart8;
