import React from "react";
import CustomButton from "../../components/CustomButton";

const HomePart7 = () => {
  return (
    <div className=" h-fit flex flex-col justify-center items-center px-6 py-">
      <p className=" text-[#F5F5F5]  sm:text-2xl mb-6 font-normal">
        The door to Konect is always open to people who want to impact lives.
      </p>
      
      <CustomButton width="" pad="0px 30px" isBool={true} text="white" bg="transparent" brWid="1px 2px"  brCol="white">Donate Now</CustomButton>
    </div>
  );
};

export default HomePart7;