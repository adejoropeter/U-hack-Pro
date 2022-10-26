import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import NgoPart1 from "./NgoPart1";
import NgoPart2 from "./NgoPart2";

const Ngo = () => {
  const { state } = ItemContext();
  const { Ngo} = state;
  const edu = Ngo[0]?.filter((a) => {
    return a.tag === "Educational Sector";
  });
  const agri = Ngo[0]?.filter((a) => {
    return a.tag === "Agricultural Sector";
  });
  const health = Ngo[0]?.filter((a) => {
    return a.tag === "Health Sector";
  });
  const all = Ngo[0]?.map((a) => {
    return a;
  });
  return (
    <div className="sm:px-24 py-10  px-6 text-sm md:text-lg ">
      <NgoPart1 />
      <div className="my-10">
        <NavLink
          to="/ngo/all"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500 p-2 md:p-2 font-normal rounded-full md:text-sm"
              : "text-[rgba(0,0,0,0.5)]  md:p-2 ";
          }}
        >
          All({all?.length})
        </NavLink>
        <NavLink
          to="/ngo/education"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500 sm:text-sm md:text-sm p-2 md:p-2 font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)] md:p-2 ";
          }}
        >
          Education({edu?.length})
        </NavLink>
        <NavLink
          to="/ngo/health-center"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500 sm:text-sm md:text-sm p-2 md:p-2 font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)]  md:p-2 ";
          }}
        >
          Health Center({health?.length})
        </NavLink>
        <NavLink
          to="/ngo/agricultural-sector"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500 sm:text-sm md:text-sm p-2 md:p-2 font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)]  md:p-2 ";
          }}
        >
          Agricultural Sector({agri?.length})
        </NavLink>
       
      </div>
      <Outlet />
    </div>
  );
};

export default Ngo;
