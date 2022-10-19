import React from "react";
import {CiUser} from 'react-icons/ci'
import {BsClipboardCheck} from 'react-icons/bs'
const HomePart5 = () => {
  return (
    <>
      <div className=" ">
        <h3 className="w-[280px] mb-10 text-3xl  font-medium">
          Become a part of the Konect movement
        </h3>
        <p className="mb-10 max-w-lg">
          At Konect our process ensures that your donation is received by people
          that really need it. We have partnered with NGOs across Nigeria to
          only create verified donation requests.
        </p>
        <div className="flex content-padding">
          <img src="/assets/Peacock.png" alt="A White Peacock" />
          <img src="/assets/Orange-bird.png" alt="A White Peacock" />
          <img src="/assets/PandG.png" alt="A White Peacock" />
          <img src="/assets/Eye.png" alt="A White Peacock" />
        </div>
      </div>
      <div className="w-[300px] h-32">
        <div className="border-b-[1px] border-b-[#1B1A42] flex items-center mb-4 py-3">
          <div className="w-fit h-fit rounded-full bg-[#0090FF] mr-4 p-[4px]">
            <img className="object-cover w-7 h-7" src="/assets/barcode.png" />
          </div>
          <p className="text-md font-medium mr-4">14</p>
          <p className="text-sm">Registered NGOs</p>
        </div>
        <div className="border-b-[1px] border-b-[#1B1A42] flex items-center mb-4 py-3">
          <div className="w-fit h-fit rounded-full bg-[#E80976] mr-4 p-[4px]">
            <CiUser size="24px" className="text-white" />
          </div>
          <p className="text-md font-medium mr-4">102</p>
          <p className="text-sm">Registered NGOs</p>
        </div>
        <div className="border-b-[1px] border-b-[#1B1A42] flex items-center py-3">
          <div className="w-fit h-fit rounded-full bg-[#15E88E] mr-4 p-[4px]">
            <BsClipboardCheck size="24px" className="text-white"/>
          </div>
          <p className="text-md font-medium mr-4">3,003</p>
          <p className="text-sm">Registered NGOs</p>
        </div>
      </div>
    </>
  );
};

export default HomePart5;
