import React from "react";
import CustomButton from "../../components/CustomButton";
import Card from "../../components/Card";

const HomePart2 = () => {
  return (
    <div>
      <div className="flex w-full  flex-col items-center md:items-stretch lg:pl-40 mb-10">
        <div className="flex items-center  sm:">
          <p className="hidden md:block w-10 h-[2px] bg-white mr-4"></p>
          <h2 className="text-2xl mb-4 md:mb-2  font-normal text-white ">How It Works</h2>
        </div>
        <p className="sm:max-w-3xl text-center md:text-left md:ml-14 text-white">
          At Konect our process ensures that your donation is received by people
          that really need it. We have partnered with NGOs across Nigeria to
          only create verified donation requests.
        </p>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:flex  sm:flex-wrap sm:justify-center sm:gap-8  md:grid-cols-3 lg:grid-cols-3 p-4 gap-2">
        <Card
          image={false}
          text="1"
          text2="Register your account"
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla urna id eget nunc tempor. Nibh sed nisl id amet vitae netus curabitur malesuada praesent. Quis neque."
          bg="#0090FF"
        />
        <Card
          image={false}
          text="2"
          text2="Select Donation "
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla urna id eget nunc tempor. Nibh sed nisl id amet vitae netus curabitur malesuada praesent. Quis neque."
          bg="#15E88E"
        />

        <Card
          image={false}
          text="3"
          text2="Make Donation"
          text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla urna id eget nunc tempor. Nibh sed nisl id amet vitae netus curabitur malesuada praesent. Quis neque."
          bg={"#E80976"}
        />
      </div>
      <div className="mt-10">
         <CustomButton bg="transparent" width="fit" pad="10px 40px" text="white" spacing="auto" brCol="white" brWid="2px" isBool={true}>
        Learn More
      </CustomButton>
      </div>
     
    </div>
  );
};

export default HomePart2;
