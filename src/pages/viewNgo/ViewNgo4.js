import React from "react";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CustomButton from "../../components/CustomButton";

const ViewNgo4 = () => {
  const ref = useRef(null);
  const scrollL = () => {
    ref.current.scrollBy(-350, 0);
  };
  const scrollR = () => {
    ref.current.scrollBy(350, 0);
  };
  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-xl text-[#1B1A42]">Events</h2>
      <div className="flex overflow-scroll  w-full  gap-4" ref={ref}>
        <div className="flex-shrink-0 w-64 h-fit lg:w-80  bg-white rounded-xl overflow-hidden scrollbar-hide border">
          <img
            src="/assets/meeting.png"
            className="w-full h-10 md:h-32 object-cover"
          />
          <div className="w-full p-6 flex gap-3">
            <div className="flex-0 flex flex-col items-center">
              <h2 className="text-[rgba(0,0,0,0.6)] ">OCT</h2>
              <h3 className="mb-4">03</h3>
            </div>
            <div className="flex-1 flex flex-col h-full gap-2 ">
              <h2 className="text-[] font-semibold">Lagos Team Meet Up</h2>
              <h3 className="text-[rgba(0,0,0,0.6)] text-sm">
                Eko Hotel & Suites, VI, Lagos 1pm - 8pm
              </h3>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                Set Reminder
              </CustomButton>
            </div>{" "}
          </div>
        </div>
        <div className="flex-shrink-0 w-64 h-fit lg:w-80  bg-white rounded-xl overflow-hidden border">
          <img
            src="/assets/cheers.png"
            className="w-full h-10 md:h-32 object-cover"
          />
          <div className="w-full p-6 flex gap-3">
            <div className="flex-0 flex flex-col items-center">
              <h2 className="text-[rgba(0,0,0,0.6)] ">OCT</h2>
              <h3 className="mb-4">03</h3>
            </div>
            <div className="flex-1 flex flex-col h-full gap-2 ">
              <h2 className="text-[] font-semibold">Lagos Team Meet Up</h2>
              <h3 className="text-[rgba(0,0,0,0.6)] text-sm">
                Eko Hotel & Suites, VI, Lagos 1pm - 8pm
              </h3>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                Set Reminder
              </CustomButton>
            </div>{" "}
          </div>
        </div>
        <div className="flex-shrink-0 w-64 h-fit lg:w-80  bg-white rounded-xl overflow-hidden border">
          <img
            src="/assets/students.png"
            className="w-full h-10 md:h-32 object-cover"
          />
          <div className="w-full p-6 flex gap-3">
            <div className="flex-0 flex flex-col items-center">
              <h2 className="text-[rgba(0,0,0,0.6)] ">OCT</h2>
              <h3 className="mb-4">03</h3>
            </div>
            <div className="flex-1 flex flex-col h-full gap-2 ">
              <h2 className="text-[] font-semibold">Lagos Team Meet Up</h2>
              <h3 className="text-[rgba(0,0,0,0.6)] text-sm">
                Eko Hotel & Suites, VI, Lagos 1pm - 8pm
              </h3>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                Set Reminder
              </CustomButton>
            </div>{" "}
          </div>
        </div>
        <div className="flex-shrink-0 w-64 h-fit lg:w-80  bg-white rounded-xl overflow-hidden border">
          <img
            src="/assets/happy-children.png"
            className="w-full h-10 md:h-32 object-cover"
          />
          <div className="w-full p-6 flex gap-3">
            <div className="flex-0 flex flex-col items-center">
              <h2 className="text-[rgba(0,0,0,0.6)] ">OCT</h2>
              <h3 className="mb-4">03</h3>
            </div>
            <div className="flex-1 flex flex-col h-full gap-2 ">
              <h2 className="text-[] font-semibold">Lagos Team Meet Up</h2>
              <h3 className="text-[rgba(0,0,0,0.6)] text-sm">
                Eko Hotel & Suites, VI, Lagos 1pm - 8pm
              </h3>
              <CustomButton
                width="100%"
                pad="10px 0px"
                bg="#1B1A42"
                text="white"
                spacing="auto"
                isBool={true}
              >
                Set Reminder
              </CustomButton>
            </div>{" "}
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

export default ViewNgo4;
