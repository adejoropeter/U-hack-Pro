import React from "react";
import { useRef } from "react";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const ViewNgo2 = () => {
  const ref = useRef(null);
  const scrollL = () => {
    ref.current.scrollBy(-350, 0);
  };
  const scrollR = () => {
    ref.current.scrollBy(350, 0);
  };
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl text-[#1B1A42]">Gallery</h2>
      <div ref={ref} className="w-full h-fit flex gap-4 overflow-scroll scrollbar-hide">
        <img src="/assets/Big-building.png" className="lg:w-72 lg:h-56"/>
        <img src="/assets/circle-hands.png" className="lg:w-72 lg:h-56"/>
        <img src="/assets/trenches.png"className="lg:w-72 lg:h-56" />
        <img src="/assets/teacher.png" className="lg:w-72 lg:h-56"/>
        <img src="/assets/afro-doctor.png" className="lg:w-72 lg:h-56"/>
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

export default ViewNgo2;
