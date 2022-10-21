import React from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
const NgoPart1 = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <h2>NGOs</h2>
      <div className="flex items-center h-fit gap-2">
        <div className="border border-solid bg-[#EEEEF6] rounded-lg w-[400px] h-[40px] ">
          <div className="flex  w-full mb-4 rounded">
            <input
              type="search"
              className=" flex-auto min-w-0 bg-[#EEEEF6] block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-clip-padding  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="w-20 h-8 flex rounded-md bg-[#EEEEF6] px-2">
          <p className="text-[#1B1A42] w-full flex items-center justify-between">
            Filter <IoIosArrowForward />
          </p>
        </div>
      </div>
      <div className="bg-[#EEEEF6] rounded-full w-fit h-fit flex items-center p-2 gap-2">
        <div className="bg-[#15E88E] rounded-full w-8 h-8 flex justify-center items-center">
          <HiOutlineLightningBolt />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg text-[#1B1A42]">95</p>
          <p className="text-[#595959] text-sm">Registered NGOs</p>
        </div>
      </div>
    </div>
  );
};

export default NgoPart1;
