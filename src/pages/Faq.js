import React, { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(true);
  return (
    <div className="border-2 max-w-xl sm:mx-auto mx-10 my-20">
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            What is Konect?
          </p>
          <div className="">{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </div>
        {show && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            donec leo nisl in. Ornare porta cras lorem est ac pellentesque velit
            tortor. Etiam non dignissim faucibus in ut diam nisl.{" "}
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4 cursor-pointer">
        <div
          className="flex justify-between items-center"
          onClick={() => setShow10(!show10)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            Who are the people behind this website?
          </p>
          <div className="">
            {show10 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show10 && (
          <div className="text-sm font-bold flex flex-col">
            <a href="mailto:haliyya460@gmail.com?subject=Hiring%20A%20BackEnd%20Developer?body=Would%20Like%20To%20Hire%20You">
              haliyya460@gmail.com (BackEnd)
            </a>
            <a href="mailto:adejoropeter25@gmail.com?subject=Hiring%20A%20FrontEnd%20Developer?body=Would%20Like%20To%20Hire%20You">
              adejoropeter25@gmail.com (FrontEnd)
            </a>
            <a href="mailto:cymplyayo@gmail.com?subject=Hiring%20A%20Product%20Designer%20Developer?body=Would%20Like%20To%20Hire%20You">
              cymplyayo@gmail.com (Product Designer)
            </a>
            <a href="mailto:akandeolamilekan2@gmail.com?subject=Hiring%20A%20Product%20Designer%20Developer?body=Would%20Like%20To%20Hire%20You">
              akandeolamilekan2@gmail.com (Product Designer)
            </a>
          </div>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow2(!show2)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            Is Konect an NGO?
          </p>
          <div className="">
            {show2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show2 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            donec leo nisl in. Ornare porta cras lorem est ac pellentesque velit
            tortor. Etiam non dignissim faucibus in ut diam nisl.{" "}
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow3(!show3)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            Is Konect available in all 36 states?
          </p>
          <div className="">
            {show3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show3 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow4(!show4)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            How do I donate?
          </p>
          <div className="">
            {show4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show4 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow5(!show5)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            Can I get a refund?
          </p>
          <div className="">
            {show5 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show5 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow6(!show6)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            Are the listed NGOs authentic?
          </p>
          <div className="">
            {show6 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show6 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow7(!show7)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            How do I recommend an NGO?
          </p>
          <div className="">
            {show7 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show7 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="mb-4 border-b-[1px] py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow8(!show8)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            Can I have two accounts?
          </p>
          <div className="">
            {show8 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show8 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
      <div className="mb-4 py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShow9(!show9)}
        >
          <p className="font-normal text-sm sm:text-lg tracking-wide">
            How to logout?
          </p>
          <div className="">
            {show9 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {show9 && (
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        )}
      </div>
    </div>
  );
};

export default Faq;
