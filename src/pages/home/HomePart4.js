import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const HomePart4 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("ngo/all");
    document.documentElement.scrollTop = 0;
    
  };
  return (
    <>
      <div className="">
        <img
          className="object-cover h-[500px] w-screen max-w-full"
          src="/assets/group-doctors.png"
          alt="group-african-doctors-students-near-medical-university-outdoor"
        />
      </div>
      <div className="w-[350px] bottom-0 absolute h-fit sm:absolute  sm:top-96 sm:right-60 rounded-2xl bg-white  sm:w-[400px] p-6 shadow-xl">
        <div>
          <h1
            className="text-2xl font-medium text-[#1B1A42] mb-4"
          >
            Events Hosted By Our NGOs
          </h1>
          <p className="text-sm font-light mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div onClick={handleClick}>
          <CustomButton width="" pad="0px 10px" bg="transparent" isBool={true} brCol="#1B1A42" brWid="1px">View NGOs</CustomButton>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePart4;
