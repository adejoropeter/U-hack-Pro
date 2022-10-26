import React from "react";
import CustomButton from "../../components/CustomButton";

const ViewNgo5 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/Active-Doctors.png')",
        backgroundPosition: "center",
      }}
      className="px-10 py-6   max-w-full h-fit flex flex-col md:flex-row  justify-between items-center gap-4  text-white   bg-[rgba(2,0,36,0.8)]"
    >
      <div className="flex flex-col gap-3 text-center sm:text-left">
        <p className="text-lg font-normal ">Become a volunteer.</p>
        <p className="text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut
          phasellus condimentum vitae amet molestie vitae.{" "}
        </p>
      </div>
      <div className="">
        <CustomButton bg="transparent" brWid="1px" pad="0px 30px">
          Learn More
        </CustomButton>
      </div>
    </div>
  );
};

export default ViewNgo5;
