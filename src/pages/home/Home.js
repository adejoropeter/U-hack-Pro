import React from "react";
import CustomButton from "../../components/CustomButton";
import Card from "../../components/Card";
import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";
import HomePart3 from "./HomePart3";
import HomePart4 from "./HomePart4";
import HomePart5 from "./HomePart5";
import HomePart6 from "./HomePart6";
import HomePart7 from "./HomePart7";
import HomePart8 from "./HomePart8";
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#EEEEF6] pt-12">
      <div className="flex flex-col sm:flex-row w-screen h-fit items-center px-6 md:px-24 py-4 gap-4">
        <HomePart1 />
      </div>
      <div
        className="h-fit w-screen content-div pt-32 pb-12  px-10"
        style={{ backgroundImage: `url(/assets/photo.svg)` }}
      >
        <HomePart2 />
      </div>
      <div className="h-fit w-screen pt-10 px-10">
        <HomePart3 />
      </div>
      <div className="relative h-[800px] max-w-full pt-20 sm:relative flex flex-col items-center">
        <HomePart4 />
      </div>
      <div className="mt-20 md:px-32 px-6 flex mb-24 sm:flex-row ">
        <HomePart5 />
      </div>
      <div
        className="h-[500px] w-screen md:px-20 px-6 home6-bg relative mt-16 flex justify-center items-end"
        style={{ backgroundImage: `url(/assets/WorldMap.png)` }}
      >
        <HomePart6 />
      </div>
      <div
        className="w-screen h-36 home7-img mt-20 py-6"
        style={{ backgroundImage: 'url("/assets/Active-Doctors.png")' }}
      >
        <HomePart7 />
      </div>
      <div>
        <HomePart8 />
      </div>
    </div>
  );
};
// volunteer-holding-box-containing-donations-charity-removebg
// clip-path: polygon(58% 5%, 78% 3%, 100% 0, 100% 70%, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 20%, 33% 9%);
// be-mother-cropped-shot-attractive-young-mother-be-sitting-sofa-home
export default Home;
