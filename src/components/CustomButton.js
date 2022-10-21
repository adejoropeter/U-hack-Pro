import React from "react";

const CustomButton = ({
  children,
  bg,
  isBool,
  text,
  spacing,
  brCol,
  brWid,
  pad,width
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
        width
      }}
      className={` ${
        isBool ? " rounded-lg text-sm text-[#1B1A42]" : "mx-auto"
      }  flex justify-center items-center h-8 font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out `}
    >
      {children}
      
    </button>
  );
};

export default CustomButton;
