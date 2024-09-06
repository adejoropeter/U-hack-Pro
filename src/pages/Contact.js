import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import ArrCard from "../components/ListArray";
const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ngo/donate");
  };
  return (
    <div className="w-full min-h-screen bg-[#EEEEF6] pt-12 overflow-hidden lg:max-w-screen-2xl lg:mx-auto">
      <div className="w-fit h-fit p-4 mx-auto mb-8">
        <p className="font-normal text-4xl text-center mb-4">Need Help&#x3F;</p>
        <p className="text-[rgba(0,0,0,0.6)] text-sm max-w-sm text-center font-sans">
          At Konect we want to be of service to our users. Select the category
          you need help with and get answers. &#33;
        </p>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 gap-2">
        {ArrCard.map((each) => {
          return (
            <Card list={each} image={true} bg="#0090FF" key={each.route} />
          );
        })}
        <div
          onClick={handleClick}
          className={`${"h-[323px] justify-between w-[354px]"} sm:w-[250px] lg:w-[330px] flex flex-col border-2 rounded-[24px] items-center p-4 bg-white `}
        >
          <div className="flex flex-col items-center">
            <div className={`${"w-fit h-fit"}  mb-4 rounded-full  bg-blue-500`}>
              <img
                src="/assets/barcode.png"
                alt="barcode"
                className="w-12 h-12"
              />
              {/* <img src="/assets/barcode.png" alt="barcode" className="w-12 h-12" /> */}
            </div>
            <p className={`text-center text-md font-medium "mb-4"`}>Donate</p>
          </div>
          <div className="border-b-[1px] border-[#1b1a42] w-full"></div>
          <div className="">
            <p className="text-center text-md font-light">
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

export default Contact;
