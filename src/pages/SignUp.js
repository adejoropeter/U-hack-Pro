import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import { SiWetransfer } from "react-icons/si";
const SignUp = () => {
  const [bool, setBool] = useState(false);
  const [err, setErr] = useState("");
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    setEmail,
    setfirstName,
    setLastName,
    role,
  } = ItemContext();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://konect-auth-api.herokuapp.com/users/register",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          role: "user",
        }
      );
      // console.log(response.data);
      navigate("/login");
      document.documentElement.scrollTop = 0;
      setErr(response.data);
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
      setBool(true);
    }
    // fetch('https://example.com/profile', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };
  setTimeout(() => {
    setBool(false);
  }, 3000);
  return (
    <div className="w-screen flex justify-center items-center  bg-white h-screen  text-black">
      <div className="border w-[500px] p-10 rounded-xl">
        <div
          className={`${
            bool
              ? " flex justify-center items-center bg-[#1B1A42] p-3 text-white rounded-full"
              : "hidden"
          }`}
        >
          <p className="gap-4 flex justify-center items-center">{err ? err:"Not connected" }</p>
        </div>
        <h1 className="text-center text-xl mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row w-full sm:mb-3">
            <div className="flex flex-col mr-4 w-full sm:w-1/2">
              <label htmlFor="firstname" className="mb-2">
                First Name
              </label>
              <input
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
                // ref={fiName}
                name="firstname"
                id="firstname"
                placeholder="Your First Name"
                className="h-10 p-2 bg-[#EEEEF6] rounded-md"
              />
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label htmlFor="lastname" className="mb-2 " >
                Last Name
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                id="lastname"
                name="lastname"
                placeholder="Your Last Name"
                className="h-10 p-2 bg-[#EEEEF6]"
                // ref={fiName}
              />
            </div>
          </div>
          <div className="flex flex-col  w-full mb-3">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              name="lastname"
              placeholder="Your Email Address"
              className="h-10 p-2 w-full bg-[#EEEEF6]"
              // ref={fiName}
            />
          </div>
          <div className="flex flex-col  w-full mb-3">
            <label htmlFor="password" className="mb-2">
              Create Password
            </label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              name="lastname"
              placeholder="Enter Password"
              className="h-10 p-2 w-full bg-[#EEEEF6]"
              // ref={fiName}
            />
          </div>
          <div className="flex flex-col  w-full mb-3">
            <label htmlFor="conpass" className="mb-2">
              Confirm Password
            </label>
            <input
              type={"password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              id="conpass"
              name="lastname"
              placeholder="Confirm Password"
              className="h-10 p-2 w-full bg-[#EEEEF6]"
              // ref={fiName}
            />
          </div>
         
          <div onClick={handleSubmit}>
            <CustomButton width={"100%"} isBool="false"  text="white" bg="#1B1A42">
              Log In
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
