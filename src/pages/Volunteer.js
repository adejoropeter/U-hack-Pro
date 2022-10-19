import React, { useRef, useState } from "react";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import CustomButton from "../components/CustomButton";
const Volunteer = () => {
  const [done, setDone] = useState(false);
  const [errMsg, setErrorMsg] = useState("");
  const [showErrMsg, setShowErrorMsg] = useState(null);
  const fiName = useRef();
  const focus = useRef();
  console.log(done);
  const handleSubmit = (e) => {
    if (done) {
      console.log("thank you");
    } else {
      e.preventDefault();
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
      console.log("done");
    }
  };
  setTimeout(() => {
    focus.current.classList.remove("visible");
    focus.current.classList.add("hidden");
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
              <label for="firstname" className="mb-2 text-[#1B1A42]">
                First Name
              </label>
              <input
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
                ref={fiName}
                name="firstname"
                id="phone"
                placeholder="+234 --- ---"
                className="h-10 p-2 text-[rgba(0,0,0,0.4)] bg-[#EEEEF6]"
              />
            </div>
            <div className="flex flex-col sm:ml-4 w-full sm:w-1/2">
              <label for="email" className="mb-2 text-[#1B1A42]">
                Email
              </label>
              <input
                id="email"
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
              id="street"
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
              <select id="select" className="bg-[#EEEEF6] h-10 p-2 text-[rgba(0,0,0,0.4)]">
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
                id="postal"
                name="postalcode"
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

export default Volunteer;
// bg-[#EEEEF6]
