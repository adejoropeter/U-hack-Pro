import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const HomePart1 = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('ngo/donate')
    document.documentElement.scrollTop = 0;

  }
  return (
    <div className="flex flex-col sm:flex-row w-screen h-fit items-center px-6 md:px-10 py-10 pb-20 gap-4 ">
      <div className=" w-full sm:w-1/2 flex flex-col justify-between h-full">
        <h2 className="text-4xl mb-6  lg:text-5xl  text-[#1B1A42] leading-tight ">
          Donate, make a difference.
        </h2>
        <p className="text-sm max-w-md mb-6">
          Thousands of NGOs are working towards making the world a better place.
          So many people are willing and able to help, but we really need your
          help.
        </p>
        <div className="mb-6" onClick={handleClick}>
          <CustomButton
            bg="#1B1A42"
            width="fit"
            pad="20px"
            teSize="20px"
            isBool={true}
            text="white"
          >
            Start Donating
          </CustomButton>
        </div>
      </div>
      <div className="relative w-full  sm:w-1/2 h-full flex justify-center">
        <img
          src="/assets/volunteer.png "
          className="absolute  sm:h-[230px] top-6 sm:top-0 sm:w-[300px] md:h-[288px] md:w-[360px] lg:h-[430px] lg:w-[120%] xl:w-[80%] xl:h-[] w-[80%] object-cover "
        />
        <img
          src="/assets/circle.png"
          className="sm:h-[]   sm:w-[80%] md:h-[] md:w-[100%] lg:h-[] lg:w-[100%] xl:w-[100%] xl:h-[] w-[70%] object-cover "
        />
      </div>
    </div>
  );
};

export default HomePart1;
