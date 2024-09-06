import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import Donation1 from "./Donation1";

const Ngo = () => {
  const { state } = ItemContext();
  const { Donation, isLoading } = state;
  const edu = Donation[0]?.filter((a) => {
    return a.tag === "Educational Sector";
  });
  const agri = Donation[0]?.filter((a) => {
    return a.tag === "Agricultural Sector";
  });
  const health = Donation[0]?.filter((a) => {
    return a.tag === "Health Sector";
  });
  const all = Donation[0]?.map((a) => {
    return a;
  });
  return (
    <div className="sm:px-24 py-10   px-6 text-sm md:text-lg overflow-hidden lg:max-w-screen-2xl lg:mx-auto flex-grow ">
      <Donation1 />
      <div className="my-10">
        <NavLink
          to="all"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500  p-2 font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 ";
          }}
        >
          
          All({all?.length})
        </NavLink>
        <NavLink
          to="education"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500  p-2 font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-2 ";
          }}
        >
          Education({edu?.length})
        </NavLink>
        <NavLink
          to="health-center"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500  p-2  font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-2 ";
          }}
        >
          Health Center({health?.length})
        </NavLink>
        <NavLink
          to="agricultural-sector"
          className={({ isActive }) => {
            return isActive
              ? "text-white bg-[#1B1A42] duration-500  p-2  font-normal rounded-full"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-2 mx-3 ";
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
