import React from "react";

const CompanyPart4 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/Active-Doctors.png')",
        backgroundPosition: "center",
      }}
      className="py-10 px-5  sm:px-20  max-w-full h-fit flex gap-4 text-white justify-center bg-[rgba(2,0,36,0.8)]"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-normal  mb-4">95+</h2>
        <p className=" text-lg font-light text-center sm:text-left">Registered NGOs</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-normal  mb-4">39k</h2>
        <p className=" text-lg font-light text-center sm:text-left">Completed Donations</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-normal  mb-4">+100M</h2>
        <p className=" text-lg font-light text-center sm:text-left">Lives Impacted</p>
      </div>
    </div>
  );
};

export default CompanyPart4;
