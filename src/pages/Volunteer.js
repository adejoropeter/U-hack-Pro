import axios from "axios";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import CustomButton from "../components/CustomButton";
const Volunteer = () => {
  const [done, setDone] = useState(false);
  const [errMsg, setErrorMsg] = useState("");
  const [showSuc, setShowSuc] = useState(false);
  const [showErr, setShowErrorMsg] = useState(null);
  const fiName = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reason, setReason] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(1);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [postalCode, setPostalCode] = useState(123);
  const [address, setAddress] = useState("");
  const [focus1, setFocus] = useState(true);
  // console.log(gender)
  const focus = useRef();
  // console.log(done);
  const handleOnBlur = () => {
    setShowSuc(false);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://konect-auth-api.herokuapp.com/users/addVolunteer",
        {
          firstName,
          lastName,
          phoneNumber,
          email,
          address,
          gender,
          postalCode,
          reason,
        }
      );
      console.log(response.data);
      // setIsAuth(true);
      // navigate("/");
      // document.documentElement.scrollTop = 0;

      // console.log('ki')
    } catch (err) {
      console.log(err);
      // if (err.response.data === undefined) {
      //   setErr(err.message);
      // } else {
      //   setErr(err.response.data);
      // }
      // setBool(true);
    }
    // axios
    //   .post("https://konect-auth-api.herokuapp.com/users/addVolunteer", {
    //     firstName,
    //     lastName,
    //     phoneNumber,
    //     email,
    //     address,
    //     gender,
    //     postalCode,
    //     reason,
    //   })
    //   .then((res) => {
    //     if (fiName.current.value === "") {
    //       setShowErrorMsg(
    //         setTimeout(() => {
    //           setErrorMsg("Please fill out the field");
    //           setFocus(false);
    //         }, 500)
    //       );
    //     } else {
    //       setShowSuc(true);
    //       console.log("done");
    //       console.log(res)
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };
  setTimeout(() => {
    setFocus(true);
  }, 2000);

  return (
    <div className="w-full min-h-screen bg-white pt-12">
      <div className="w-fit h-fit p-4 mx-auto mb-8">
        <p className=" text-3xl text-center leading-[3rem] font-semibold text-[#1B1A42]">
          Want to help&#x3F;
        </p>
        <p className="text-[#1B1A42] text-3xl  text-center font-semibold font-sans">
          Volunteer today!
        </p>
      </div>
      <div className="border-2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] mx-auto p-8">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-between w-full"
        >
          <div className="flex flex-col sm:flex-row w-full sm:mb-3">
            <div className="flex flex-col mr-4 w-full sm:w-1/2">
              <label for="firstname" className="mb-2 text-[#1B1A42]">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ref={fiName}
                name="firstname"
                id="firstname"
                placeholder="Your First Name"
                className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
              />
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label for="lastname" className="mb-2 text-[#1B1A42]">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
                name="lastname"
                placeholder="Your Last Name"
                className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
                ref={fiName}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:mb-3">
            <div className="flex flex-col mr-4 w-full sm:w-1/2">
              <label for="phone" className="mb-2 text-[#1B1A42]">
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                ref={fiName}
                name="firstname"
                id="phone"
                type="number"
                placeholder="+234 --- ---"
                className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
              />
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label for="email" className="mb-2 text-[#1B1A42]">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                name="lastname"
                placeholder="e.g.cymplyayo@gmail.com"
                className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
                ref={fiName}
              />
            </div>
          </div>
          <div className="flex flex-col sm:mb-3">
            <label for="street" className="mb-2 text-[#1B1A42]">
              Street Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="street"
              type="number"
              name="subject"
              placeholder="e.g.12b block Manchester"
              className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
              ref={fiName}
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:mb-3">
            <div className="flex flex-col mr-4 w-full sm:w-1/2">
              <label for="select" className="mb-2 text-[#1B1A42]">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                id="select"
                className="bg-[#EEEEF6] h-10 p-2 text-[rgba(0,0,0,0.4)]"
              >
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {/* // className="h-10 p-2" */}
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label for="postal" className="mb-2 text-[#1B1A42]">
                Postal Code
              </label>
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                id="postal"
                name="postalcode"
                type="number"
                placeholder="e.g.1x9x5x7"
                className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
                ref={fiName}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label for="message" className="mb-2 text-[#1B1A42]">
              What Are you Volunteering?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="resize-none h-[232px] bg-[#EEEEF6] p-2 text-[rgba(0,0,0,0.4)]"
              ref={fiName}
            />
          </div>
          <div onClick={handleSubmit}>
            <CustomButton
              bg="#1B1A42"
              isBool={false}
              pad="2px 16px"
              text="white"
            >
              Submit
            </CustomButton>
          </div>
        </form>
      </div>
      <div
        ref={focus}
        className={`${
          focus1 ? "hidden" : "block"
        } fixed bottom-10 left-[50%] bg-[#1B1A42] text-white  p-3 rounded-full`}
      >
        {errMsg}
      </div>
      {showSuc && (
        <div
          onBlur={handleOnBlur}
          className="w-96 h-64 shadow-xl bg-white fixed rounded-3xl py-6 px-10 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
        >
          <div onClick={() => setShowSuc(false)} className="flex justify-end">
            <FaTimes className="text-[#1B1B1B]" />
          </div>
          <div className="w-32 h-32 bg-[#EEEEF6] pb-10 pt-10 rounded-full mx-auto flex justify-center items-center">
            <div className="bg-[#C6C6D9] w-24 h-24 rounded-full flex justify-center items-center">
              <img
                src="/assets/Vector.png"
                className="w-14 h-14 object-cover"
              />
            </div>
          </div>
          <h2 className="text-center font-light mt-5">
            Thank You for Volunteering
          </h2>
        </div>
      )}
    </div>
  );
};

export default Volunteer;
// bg-[#EEEEF6]
