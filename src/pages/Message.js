import React, { useRef, useState } from "react";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import CustomButton from "../components/CustomButton";
const Message = () => {
  const [done, setDone] = useState(false);
  const [errMsg, setErrorMsg] = useState("");
  const [showErrMsg, setShowErrorMsg] = useState(null);
  const fiName = useRef();
  const focus = useRef();
  console.log(done)
  const handleSubmit = (e) => {
    if(done){
      console.log('thank you')
    }else{
      e.preventDefault()
    }
    // e.preventDefault();
    if (fiName.current.value === "") {
      setShowErrorMsg(
        setTimeout(() => {
          setErrorMsg("Please fill out the field");
          focus.current.classList.remove("hidden");
          focus.current.classList.add("visible");
        }, 500)
      );
    } else {
      setDone(true);
      console.log('done')
    }
  };
  setTimeout(() => {
    focus.current.classList.remove("visible");
    focus.current.classList.add("hidden");
  }, 2000);

  return (
    <div className="w-full min-h-screen bg-[#EEEEF6] pt-12">
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
          method={`${done ? "POST" : ""}`}
          action={`${
            done
              ? "https://getform.io/f/7c0179c6-6abd-4620-b8cd-7b79145a1801"
              : ""
          }`}
          className="flex flex-col justify-between w-full"
        >
          <div className="flex flex-col sm:flex-row w-full sm:mb-3">
            <div className="flex flex-col mr-4 w-full sm:w-1/2">
              <label for="firstname" className="mb-2">First Name</label>
              <input
                ref={fiName}
                name="firstname"
                id="firstname"
                placeholder="Your First Name"
                className="h-10 p-2"
              />
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label for="lastname" className="mb-2">Last Name</label>
              <input
                id="lastname"
                name="lastname"
                placeholder="Your Last Name"
                className="h-10 p-2"
                ref={fiName}
              />
            </div>
          </div>
          <div className="flex flex-col sm:mb-3">
            <label for="subject" className="mb-2">Subject</label>
            <input
            id="subject"
              name="subject"
              placeholder="Ex. Donation"
              className="h-10 p-2"
              ref={fiName}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label for="message" className="mb-2">Write A Message</label>
            <textarea
            id="message"
              name="message"
              placeholder="Your Message"
              className="resize-none h-[232px] p-2"
              ref={fiName}
            />
          </div>
         <CustomButton>Submit</CustomButton>
        </form>
      </div>
      <div
        ref={focus}
        className="fixed bottom-10 left-[40%] bg-[#1B1A42] text-white hidden p-3 rounded-full"
      >
        {errMsg}
      </div>
    </div>
  );
};

export default Message;
// bg-[#EEEEF6]
