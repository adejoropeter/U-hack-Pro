import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
const ViewNgo1 = ({ detail: { name, mission, tag, email, phonenumber } }) => {
  console.log(phonenumber);
  // const fstFour = phonenumber?.split("").slice(0, 4).join("");
  // const secThree = phonenumber?.split("").slice(4, 7).join("");
  // const trdFour = phonenumber?.split("").slice(8, 11).join("");
  // console.log(fstFour, secThree, trdFour);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3">
        <img src="/assets/PandG.png" className="w-8 h-8" />
        <div className="flex flex-col gap-3">
          <p className="text-[#1B1A42] text-lg font-semibold">{name}</p>
          <p className="bg-[#EEEEF6] text-[#1B1A42] rounded-full text-md font-normal p-1 px-2  w-fit h-fit">
            {tag}
          </p>
        </div>
      </div>
      <img src="/assets/group-doctors.png" />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl text-[#1B1A42]">Our Mission</h3>
        <p>{mission}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl text-[#1B1A42]">Contact Detail</h3>
        <div className="flex gap-10">
          <div className="w-56 h-fit flex gap-2 p-1 rounded-full items-center bg-[#EEEEF6]">
            <span className="bg-[#1B1A42] w-8 flex justify-center items-center h-8 rounded-full text-white">
              <BiMessageSquareDetail size="20px" />
            </span>
            <span>{email}</span>
          </div>
          <div className="w-56 h-fit flex gap-2 p-1 rounded-full items-center bg-[#EEEEF6]">
            <span className="bg-[#1B1A42] w-8 flex justify-center items-center h-8 rounded-full text-white">
              <BsTelephone size="20px" />
            </span>
            <div>
              <span>{phonenumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNgo1;
