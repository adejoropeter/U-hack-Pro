import React from "react";
import CustomButton from "../../components/CustomButton";

const HomePart7 = () => {
  return (
    <div className=" h-full flex flex-col justify-center items-center">
      <p className=" text-[#F5F5F5] text-2xl mb-6 font-medium">
        The door to Konect is always open to people who want to impact lives.
      </p>
      
      <CustomButton isBool={true} text="white" bg="transparent" brWid="1px 2px" brCol="white">Donate Now</CustomButton>
    </div>
  );
};

export default HomePart7;
