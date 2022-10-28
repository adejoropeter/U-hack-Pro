import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Login = () => {
  const [err, setErr] = useState("");
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const [bool, setBool] = useState(false);
  const {
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
    isAuth,
    setIsAuth,
  } = ItemContext();
  const ref = useRef(null);
  const handleClick = () => {
    setHidden(!hidden);
  };
  const handleSubmit = async () => {
    // axios.defaults.withCredentials=true;
    try {
      const response = await axios.post(
        "https://konect-auth-api.herokuapp.com/users/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      console.log(response.data);
      setIsAuth(true);
      navigate("/");
      document.documentElement.scrollTop = 0;

      // console.log('ki')
    } catch (err) {
      console.log(err);
      if (err.response.data === undefined) {
        setErr(err.message);
      } else {
        setErr(err.response.data);
      }
      setBool(true);
    }
    setTimeout(() => {
      setBool(false);
    }, 3000);
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
  return (
    <div className="w-screen flex justify-center items-center bg-white h-screen  text-black">
      <div className="border w-[500px] p-10 sm:rounded-xl">
        <div
          className={`${
            bool
              ? " flex justify-center items-center bg-[#1B1A42] p-3 text-white rounded-full"
              : "hidden"
          }`}
        >
          <p className="gap-4 flex justify-center items-center">{err}</p>
        </div>
        <h1 className="text-center text-xl mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  w-full mb-3 ">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
              id="email"
              name="lastname"
              placeholder="Your Last Name"
              className="h-10 p-2 w-full bg-[#EEEEF6]"
              // ref={fiName}
            />
          </div>
          <div className="flex flex-col  w-full mb-3 ">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <div className="relative w-full">
              <input
                ref={ref}
                type={hidden ? "password" : "search"}
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
                id="password"
                name="lastname"
                placeholder="Enter Password"
                autoComplete="false"
                className="h-10 p-2 w-full pr-10  bg-[#EEEEF6]"
                // ref={fiName}
              />{" "}
              <div className="absolute top-4 right-4 " onClick={handleClick}>
                {hidden ? <BsEyeSlash/>:<BsEye/>}
              </div>
            </div>
          </div>
          <div onClick={handleSubmit} className="text-lg">
            <CustomButton
              width={"100%"}
              isBool="true"
              teSize="20px"
              text="white"
              bg="#1B1A42"
            >
              Log In
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
