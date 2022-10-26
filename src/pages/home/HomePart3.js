import React from "react";
import CustomButton from "../../components/CustomButton";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

const HomePart3 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("ngo/donate");
    document.documentElement.scrollTop = 0;
    
  };
  return (
    <div>
      <div className="flex w-fit mx-auto  flex-col sm:pl-10 mb-10">
        <h2 className="text-4xl font-normal mb-6 text-[#1B1A42] text-center">
          Lend a helping hand
        </h2>
        <p className="sm:max-w-3xl  text-black text-center text-sm">
          At Konect our process ensures that your donation is received by people
          that really need it. We have partnered with NGOs across Nigeria to
          only create verified donation requests.
        </p>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:flex  sm:flex-wrap sm:justify-center sm:gap-8  md:grid-cols-3 lg:grid-cols-3 p-4 gap-2">
        <div className="w-[354px] h-[400px] sm:w-[250px] lg:w-[330px] flex flex-col border-2 rounded-[24px] justify-between items-center overflow-hidden shadow-xl bg-white">
          <img
            src="/assets/happy-children.png"
            className="w-full h-42 md:h-56 object-cover"
          />
          <div className="w-full p-6">
            <h2 className="text-[#1B1A42] mb-4">Feed The Kids NG</h2>
            <h3 className="mb-4">N260,000 of N500,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>{" "}
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="w-[354px] h-[400px] sm:w-[250px] lg:w-[330px] flex flex-col border-2 rounded-[24px] justify-between items-center overflow-hidden shadow-xl bg-white">
          <img
            src="/assets/rounded-hands.png"
            className="w-full h-42 object-cover md:h-56"
          />
          <div className="w-full p-6">
            <h2 className="text-[#1B1A42] mb-4">Spreading Love NG</h2>
            <h3 className="mb-4">N110,000 of N300,000</h3>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[50%] bg-[#1B1A42] rounded-full"></p>
            </div>{" "}
            <div onClick={handleClick}>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                View Donations
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="w-[354px] h-[400px] sm:w-[250px] lg:w-[330px] flex flex-col border-2 rounded-[24px] justify-between items-center overflow-hidden shadow-xl bg-white">
          <img
            src="/assets/flooded-buildings.png"
            className="w-full h-42 object-cover md:h-56"
          />
          <div className="w-full p-6">
            <h2 className="text-[#1B1A42] mb-4">
              FBreaking the Shackles of Poverty NG
            </h2>
            <h3 className="mb-4">N260,000 of N300,000</h3>
            <div className="w-[80%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[60%] bg-[#1B1A42] rounded-full"></p>
            </div>{" "}
            <div onClick={handleClick}>

            <CustomButton
              width="100%"
              pad="10px 0px"
              bg="#1B1A42"
              text="white"
              spacing="auto"
              isBool={true}
              >
              View Donations
            </CustomButton>
              </div>
          </div>
        </div>
      </div>
      <div className="mt-10" onClick={handleClick}>
        <CustomButton
          width=""
          pad="0px 20px"
          bg="transparent"
          isBool={true}
          text="#1B1A42"
          brWid="1px"
          spacing="auto"
          brCol="#1B1A42"
        >
          View All NGOs
        </CustomButton>
      </div>
    </div>
  );
};

export default HomePart3;
