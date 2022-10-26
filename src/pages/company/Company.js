import React from "react";
import CompanyPart1 from "./CompanyPart1";
import CompanyPart2 from "./CompanyPart2";
import CompanyPart3 from "./CompanyPart3";
import CompanyPart4 from "./CompanyPart4";
import CompanyPart5 from "./CompanyPart5";
import CompanyPart6 from "./CompanyPart6";
import CompanyPart7 from "./CompanyPart7";

const Company = () => {
  const items = ["peter", "ayo", "sam"];
  // const len = arr[0];
  let currentIndex = 0
  // const nextIndex = (currentIndex + 1) % items.length;
  // items[nextIndex];
  const next=()=>{
    if(currentIndex<items.length-1){
      currentIndex++
    }else{
      currentIndex=0;
    }
    return currentIndex
  }
  // console.log(currentIndex)
  // console.log(currentIndex+2);
  // console.log(items[nextIndex])
  return (
    <div className="w-full min-h-screen bg-[] pt-12 px-10">
      <CompanyPart1 />
      <CompanyPart2 />
      <CompanyPart3 />
      <CompanyPart4 />
      <CompanyPart5 />
      <CompanyPart6 />
      <CompanyPart7 />
    </div>
  );
};

export default Company;
