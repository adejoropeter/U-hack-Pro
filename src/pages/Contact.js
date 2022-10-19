import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import ArrCard from "../components/ListArray";
const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#EEEEF6] pt-12">
      <div className="w-fit h-fit p-4 mx-auto mb-8">
        <p className="font-normal text-4xl text-center mb-4">Need Help&#x3F;</p>
        <p className="text-[rgba(0,0,0,0.6)] text-sm max-w-sm text-center font-sans">
          At Konect we want to be of service to our users. Select the category
          you need help with and get answers. &#33;
        </p>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 gap-2">
        {ArrCard.map((each) => {
          return <Card list={each} image={true} bg="#0090FF" />;
        })}
      </div>
    </div>
  );
};

export default Contact;
