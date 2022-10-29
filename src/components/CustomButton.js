import React from "react";

const CustomButton = ({
  children,
  bg,
  isBool,
  text,
  spacing,
  brCol,
  brWid,
  pad,
  width,teSize
}) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bg,
        color: text,
        marginInline: spacing,
        borderColor: brCol,
        borderWidth: brWid,
        padding: pad,
        width,
        teSize
      }}
      className={` ${
        isBool ? " rounded-lg  text-[#1B1A42]" : "mx-auto"
      }  flex justify-center items-center h-8 font-medium leading-tight rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
