import React from "react";
import NgoCard from "./NgoCard";

const NgoPart2 = () => {
  return (
    <div>
      <div></div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 p-4 gap-10 sm:gap-14 lg:gap-32">
        <NgoCard />
        <NgoCard />
        <NgoCard />
      </div>
    </div>
  );
};

export default NgoPart2;
