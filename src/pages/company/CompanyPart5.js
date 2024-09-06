import React from "react";

const CompanyPart5 = () => {
  return (
    <div className="px-0 sm:px-20 py-10 w-full">
      <h1 className="text-xl font-normal mb-6 text-center w-full">
        The Faces Behind Konect
      </h1>
      <div className="px-10 sm:px-20 py-10 w-full ">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10">
          <div className="max-w-xs flex flex-col">
            <div className="shadow-lg w-fit h-fit flex items-center justify-center bg-white mb-4 rounded-3xl border-[1px] overflow-hidden">
              <img
                src="/assets/founder.png"
                alt="barcode"
                className="w-[100%]"
              />
            </div>
            <div className="">
              <p className="text-base mb-2 ">Lolade Martins</p>
              <p className="text-[rgba(0,0,0,0.6)]">Founder</p>
            </div>
          </div>
          <div className="  max-w-xs flex flex-col">
            <div className=" w-fit h-fit flex items-center justify-center bg-white mb-4 rounded-2xl border-[1px] overflow-hidden">
              <img
                src="/assets/co-founder.png"
                alt="barcode"
                className="w-[] h-[] object-cover"
              />
            </div>
            <div className="">
              <p className="text-base mb-2 ">Peter Chukwuma</p>
              <p className="text-[rgba(0,0,0,0.6)]">Co-founder</p>
            </div>
          </div>
          <div className=" max-w-xs flex flex-col">
            <div className=" w-fit h-fit flex items-center justify-center mb-4 bg-white rounded-2xl border-[1px] overflow-hidden">
              <img
                src="/assets/headoffinance.png"
                alt="barcode"
                className="w-[] h-[] object-cover"
              />
            </div>
            <div className="">
              <p className="text-base mb-2 ">Karen Agbonika</p>
              <p className="text-[rgba(0,0,0,0.6)]">Head of Finance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPart5;
