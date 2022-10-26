import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "./contextApi/statemanagement.contextApi";
const Card = ({ list, image, text, bg, text2, text3 }) => {
  


  // const { focus } = ItemContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${list.route}`);
    // console.log(focus)
    // focus.current.onfocus()
    // window.scroll(0,0)
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        image ? "h-[323px] justify-between w-[354px]" : "h-[300px] w-[304px]"
      } sm:w-[250px] lg:w-[330px] flex flex-col border-2 rounded-[24px] items-center p-4 bg-white `}
    >
      <div className="flex flex-col items-center">
        <div
          style={{ backgroundColor: bg }}
          className={`${
            image ? "w-fit h-fit" : "w-10 h-10 flex items-center justify-center"
          }  mb-4 rounded-full  `}
        >
          {image ? (
            <img
              src="/assets/barcode.png"
              alt="barcode"
              className="w-12 h-12"
            />
          ) : (
            <p className={`text-white text-2xl  font-semibold`}>{text}</p>
          )}
          {/* <img src="/assets/barcode.png" alt="barcode" className="w-12 h-12" /> */}
        </div>
        <p className={`text-center text-md font-medium ${image ? "" : "mb-4"}`}>
          {image ? list.name : <p>{text2}</p>}
        </p>
      </div>
      <div className="border-b-[1px] border-[#1b1a42] w-full"></div>
      <div className="">
        <p className="text-center text-md font-light">
          {image ? (
            list.description
          ) : (
            <p
              className={`text-black text-sm  font-normal ${
                image ? "" : "mt-4"
              }`}
            >
              {text3}
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
