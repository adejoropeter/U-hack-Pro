import React from "react";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const ViewNgo3 = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const scrollL = () => {
    ref.current.scrollBy(-350, 0);
  };
  const scrollR = () => {
    ref.current.scrollBy(350, 0);
  };

  const handleClick = () => {
    navigate("/ngo/donate");
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl text-[#1B1A42]">Donations</h2>
      <div className="flex overflow-scroll  w-full h-fit  gap-4" ref={ref}>
        <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden scrollbar-hide">
          <img
            src="/assets/happy-children.png"
            className="w-full h-24 md:h-32 object-cover"
          />
          <div className="w-full p-4">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations Details
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden">
          <img
            src="/assets/smile.png"
            className="w-full h-24 md:h-32 object-cover"
          />
          <div className="w-full p-4">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations Details
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden">
          <img
            src="/assets/happy-children.png"
            className="w-full h-24 md:h-32 object-cover"
          />
          <div className="w-full p-4">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations Details
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden">
          <img
            src="/assets/happy-children.png"
            className="w-full h-24 md:h-32 object-cover"
          />
          <div className="w-full p-4">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations Details
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden">
          <img
            src="/assets/smile.png"
            className="w-full h-24 md:h-32 object-cover"
          />
          <div className="w-full p-4">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations Details
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden">
          <img
            src="/assets/happy-children.png"
            className="w-full h-24 md:h-32 object-cover"
          />
          <div className="w-full p-4">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations Details
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  gap-2 w-full justify-end">
        <span onClick={scrollL} className="border-2">
          <FiChevronLeft />
        </span>
        <span className="border-2" onClick={scrollR}>
          <FiChevronRight />
        </span>
      </div>
    </div>
  );
};

export default ViewNgo3;
