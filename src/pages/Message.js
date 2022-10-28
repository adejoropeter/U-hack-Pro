import axios from "axios";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import CustomButton from "../components/CustomButton";
const Message = () => {
  const [errMsg, setErrorMsg] = useState("");
  const [showErrMsg, setShowErrorMsg] = useState(null);
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuc, setShowSuc] = useState(false);
  const fiName = useRef();
  const focus = useRef();
  const [focus1,setFocus]=useState(true)
  const navigate = useNavigate();
  // console.log(done);
  const handleOnBlur = () => {
    return setShowSuc(false);
  };
  const handleSubmit = () => {
    axios
      .post("https://konect-auth-api.herokuapp.com/users/addMessage", {
        firsName,
        lastName,
        subject,
        message,
      })
      .then((res) => {
        if (fiName.current.value === "") {
          setShowErrorMsg(
            setTimeout(() => {
              setErrorMsg("Please fill out the field");
           setFocus(false)
            }, 500)
          );
        } else {
          
          setShowSuc(true);
          console.log("done");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // const handleSubmit = (e) => {
  //   if (done) {
  //     console.log("thank you");
  //   } else {
  //     e.preventDefault();
  //   }
  //   // e.preventDefault();
  //   if (fiName.current.value === "") {
  //     setShowErrorMsg(
  //       setTimeout(() => {
  //         setErrorMsg("Please fill out the field");
  //         focus.current.classList.remove("hidden");
  //         focus.current.classList.add("visible");
  //       }, 500)
  //     );
  //   } else {
  //     setDone(true);
  //     setShowSuc(true);
  //     console.log(done);
  //     console.log("done");
  //   }
  // };
  // console.log(done);
  setTimeout(() => {
    setFocus(true)
   
  }, 2000);

  return (
    <div className="w-full min-h-screen bg-[#EEEEF6] pt-12 relative">
      <div className="w-fit h-fit p-4 mx-auto mb-8">
        <p className=" text-3xl text-center leading-[3rem] font-semibold text-[#1B1A42]">
          Have a message&#x3F;
        </p>
        <p className="text-[#1B1A42] text-3xl  text-center font-semibold font-sans">
          Get in touch with us;
        </p>
      </div>
      <div className="border-2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] mx-auto p-8">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-between w-full"
        >
          '
          <div className="flex flex-col sm:flex-row w-full sm:mb-3">
            <div className="flex flex-col mr-4 w-full sm:w-1/2">
              <label for="firstname" className="mb-2">
                First Name
              </label>
              <input
                value={firsName}
                onChange={(e) => setFirstName(e.target.value)}
                ref={fiName}
                name="firstname"
                id="firstname"
                placeholder="Your First Name"
                className="h-10 p-2"
              />
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label for="lastname" className="mb-2">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
                name="lastname"
                placeholder="Your Last Name"
                className="h-10 p-2"
                ref={fiName}
              />
            </div>
          </div>
          '
          <div className="flex flex-col sm:mb-3">
            <label for="subject" className="mb-2">
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              id="subject"
              name="subject"
              placeholder="Ex. Donation"
              className="h-10 p-2"
              ref={fiName}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label for="message" className="mb-2">
              Write A Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              placeholder="Your Message"
              className="resize-none h-[232px] p-2 "
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
        className={`${focus1?'hidden':'block'} fixed bottom-10 left-[50%] bg-[#1B1A42] text-white  p-3 rounded-full`}
      >
        {errMsg}
      </div>
      {showSuc && (
        <div
          onBlur={handleOnBlur}
          className="w-96 h-64 shadow-xl bg-white fixed rounded-3xl py-6 px-10 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
        >
          <div
            onClick={() => {
              setShowSuc(false);
              navigate("/");
              document.documentElement.scrollTop = 0;
            }}
            className="flex justify-end"
          >
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
          <h2 className="text-center font-light mt-5">Message Sent</h2>
        </div>
      )}
    </div>
  );
};

export default Message;
// bg-[#EEEEF6]
