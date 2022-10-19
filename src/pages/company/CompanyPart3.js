import React from "react";

const CompanyPart3 = () => {
  return (
    <div className="px-10  sm:px-20 py-10 sm:py-20">
      <h1 className="text-xl font-semibold mb-10">Our Core Values</h1>
      <div className="flex justify-between flex-col items-center sm:flex-row  gap-10">
        <div className="rounded-xl border-[1px] sm:max-w-none w-[400px] border-[rgba(0,0,0,0.24)] shadow-lg bg-white max-w-xs flex flex-col items-center py-10">
          <div className=" w-fit h-fit  flex items-center justify-center mb-4 rounded-full bg-[#0090FF] p-3">
            <img
              src="/assets/barcode.png"
              alt="barcode"
              className="w-10 h-10"
            />
          </div>
          <p className={` text-sm  font-semibold `}>Stewardship</p>
          <div className="p-6">
            <p className="text-gray-700 text-base mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              urna id eget nunc tempor. Nibh sed nisl id amet vitae netus
              curabitur malesuada praesent. Quis neque.
            </p>
          </div>
        </div>
        <div className="rounded-xl border-[1px] sm:max-w-none w-[400px] border-[rgba(0,0,0,0.24)] shadow-lg bg-white max-w-xs flex flex-col items-center py-10">
          <div className=" w-fit h-fit flex items-center p-3 justify-center mb-4 rounded-full bg-[#0090FF]">
            <img
              src="/assets/barcode.png"
              alt="barcode"
              className="w-10 h-10"
            />
          </div>
          <p className={` text-sm  font-semibold `}>Integrity</p>
          <div className="p-6">
            <p className="text-gray-700 text-base mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              urna id eget nunc tempor. Nibh sed nisl id amet vitae netus
              curabitur malesuada praesent. Quis neque.
            </p>
          </div>
        </div>
        <div className="rounded-xl border-[1px] sm:max-w-none w-[400px] border-[rgba(0,0,0,0.24)] shadow-lg bg-white max-w-xs flex flex-col items-center py-10">
          <div className=" w-fit h-fit flex items-center justify-center mb-4 p-3 rounded-full bg-[#0090FF]">
            <img
              src="/assets/barcode.png"
              alt="barcode"
              className="w-10 h-10"
            />
          </div>
          <p className={` text-sm  font-semibold `}>Transparency</p>
          <div className="p-6">
            <p className="text-gray-700 text-base mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              urna id eget nunc tempor. Nibh sed nisl id amet vitae netus
              curabitur malesuada praesent. Quis neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPart3;
