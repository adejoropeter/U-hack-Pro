import React from "react";

const CompanyPart1 = () => {
  return (
    <div className="px-20 flex gap-10 sm:gap-2 py-10 justify-between flex-col sm:flex-row items-center">
      <div className="flex flex-col">
        <p className="mb-6">About us</p>
        <h1 className="text-[#1B1A42] text-5xl max-w-sm mb-4 font-normal">
          <span className="text-[#ABAAD0]">Charity</span> is an act of love.
          Spread love today
        </h1>
        <p className="mb-6 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, vel ac
          in convallis. Id neque quam diam eleifend id in id velit.
        </p>
        <div className="flex gap-3">
          <p className="w-16 h-2 rounded-sm bg-[#1B1A42]"></p>
          <p className="w-10 h-2 rounded-sm bg-[#ABAAD0]"></p>
          <p className="w-10 h-2 rounded-sm bg-[#ABAAD0]"></p>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <img
          src="/assets/high2.png"
          className="w-[500px] object-cover h-[300px] shadow-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CompanyPart1;
