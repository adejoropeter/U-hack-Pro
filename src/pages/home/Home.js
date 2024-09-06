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
    <div className="bg-400 min-h-screen bg[#EEEEF6] py-10 w-full overflow-hidden lg:max-w-screen-2xl lg:mx-auto flex-grow">
      <div className="flex flex-col sm:flex-row w-full h-fit items-center px6 md:px24 py-4 gap-4">
        <HomePart1 />
      </div>
      <div
        className="h-fit w-full content-div clip sm:clip pt-32 pb-12  px-10"
        style={{ backgroundImage: `url(/assets/photo.svg)` }}>
        <HomePart2 />
      </div>
      <div className="h-fit w-screen pt-10 px-10">
        <HomePart3 />
      </div>
      <div className="relative h-[800px] max-w-full pt-20 sm:relative flex flex-col items-center">
        <HomePart4 />
      </div>
      <div className="mt-20 md:px-32 px-6 flex flex-col mb-24 sm:flex-row  gap-6">
        <HomePart5 />
      </div>
      <div
        className="h-[500px] w-screen md:px-20 px-6 home6-bg relative mt-16 flex justify-center items-end"
        style={{ backgroundImage: `url(/assets/WorldMap.png)` }}>
        <HomePart6 />
      </div>
      <div
        className="w-screen h-fit home7-img mt-20 py-10 sm:py-6"
        style={{ backgroundImage: 'url("/assets/Active-Doctors.png")' }}>
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
