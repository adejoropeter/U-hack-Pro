import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const Blog2 = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
    navigate(`/company/blog/blog3`)

        document.documentElement.scrollTop = 0;
    
      }
  return (
    <div className="w-full min-h-screen bg-[] pt-12 px-10 py-10   overflow-hidden lg:max-w-screen-2xl lg:mx-auto flex-grow">
      <div className="flex flex-col items-center ">
        <p className="text-sm italic text-center mb-6">
          Published 5th June, 2022
        </p>
        <h4 className="text-xl mb-4 font-semibold">
        Over 100 million kids are homeless in Nigeria.
        </h4>
        <h5 className="text-md mb-4 font-normal">Why kids matter...</h5>
        <div className="flex gap-4">
          <div className="flex">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-[#DBDAF1] text-[rgba(0,0,0,0.6)] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgba(0,0,0,0.6)] hover:text-[#DBDAF1] hover:shadow-lg  transition duration-150 ease-in-out"
            >
              Needy
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-[#DBDAF1] text-[rgba(0,0,0,0.6)] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgba(0,0,0,0.6)] hover:text-[#DBDAF1] hover:shadow-lg  transition duration-150 ease-in-out"
            >
              Kids
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-[#DBDAF1] text-[rgba(0,0,0,0.6)] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgba(0,0,0,0.6)] hover:text-[#DBDAF1] hover:shadow-lg  transition duration-150 ease-in-out"
            >
              Life
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-[#DBDAF1] text-[rgba(0,0,0,0.6)] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgba(0,0,0,0.6)] hover:text-[#DBDAF1] hover:shadow-lg  transition duration-150 ease-in-out"
            >
              Food
            </button>
          </div>
        </div>
      </div>
      <div className="my-10">
        <img src="/assets/water.png" className="w-full h-[400px] object-cover" />
      </div>
      <div>
        <h1 className="text-center text-[rgba(0,0,0,0.6)] text-2xl mb-6">
          The Story of Homeless Kids
        </h1>
        <p className="mb-4 text-center md:text-left w-full ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur
        </p>
        <p className="mb-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur
        </p>
       
      </div>
      <div>
        <p className="mb-4 text-2xl font-normal text-center sm:text-left">Next Up</p>
        <div className="mb-10 flex flex-col sm:flex-row  overflow-hidden h-fit  w-full rounded-lg bg-white shadow-lg border border-gray-400">
          <img
            className=" w-full sm:w-[200px]  md:h-auto object-cover md:w-72 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/assets/children-playing2.png"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start w-full ">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Helping the kids of Ilupeju
            </h5>
            <p className="text-gray-700 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              quisque lorem quis faucibus tortor nunc Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Fringilla quisque lorem quis
              faucibus tortor nunc faucibus tortor nunc Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Fringilla quisque l
            </p>
            <div onClick={handleClick}>
              <CustomButton
                isBool={true}
                brCol="#1B1A42"
                brWid="1px"
                bg="white"
              >
                {" "}
                Read Blog <MdKeyboardArrowRight />{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
