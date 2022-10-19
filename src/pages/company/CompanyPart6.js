import React from "react";
import CustomButton from "../../components/CustomButton";

const CompanyPart6 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/Active-Doctors.png')",
        backgroundPosition: "center",
      }}
      className="py-10 px-10  sm:px-20  max-w-full h-fit flex flex-col justify-start gap-4  text-white   bg-[rgba(2,0,36,0.8)]"
    >
      <div>
        <p className="text-lg font-normal mb-4">Become a volunteer.</p>
        <p className="text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere ut
          phasellus condimentum vitae amet molestie vitae.{" "}
        </p>
      </div>
      <div className="">
      <CustomButton bg="transparent" brWid="1px" pad="0px 30px" >Learn More</CustomButton>

      </div>
    </div>
  );
};

export default CompanyPart6;
