import React from "react";

const HomePart6 = () => {
  return (
    <>
      <div className="border-2 border-black w-12 rounded-full overflow-hidden absolute bottom-[45%] right-[50%]">
        <img src="/assets/aTenagerAndAbabyBoy.png" className="w-12" />
      </div>
      <div className="">
        <p className="mb-4 text-center ">
          Nigeria has a <span className="text-[#1B1A42]">15%</span> poverty rate, making it
          one of the poorest countries.
        </p>
        <p className="text-center mb-4">
          While representing only 2.4% of the total world population
        </p>
        <div>
          <p className="text-center">Approximately</p>
          <h4 className="font-normal text-6xl text-center">95.1 M</h4>
          <p className="text-center">people are dealing with poverty.</p>
        </div>
      </div>
    </>
  );
};

export default HomePart6;
