import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const ref = useRef(null);
  const [navLink, setNavLink] = useState(false);
  return (
    <>
      <div className="h-fit">
        <Link to="/">
          <img
            src="/assets/headerLogo.png"
            alt="app-logo(konect)"
            className="w-[100px] h-[46px] object-cover"
          />
        </Link>
      </div>
      <div className="hidden sm:flex">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive
              ? "text-[#1B1A42] duration-500  sm:text-sm md:text-lg p-3 md:p-4 border-b-2 mx-3 border-[#1b1a42]  font-bold"
              : " text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/ngo"
          className={({ isActive }) => {
            return isActive
              ? "text-[#1B1A42] duration-500 sm:text-sm md:text-lg p-3 md:p-4 border-b-2 mx-3 border-[#1b1a42]  font-bold"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
          }}
        >
          NGOs
        </NavLink>

        <NavLink
          to="/company"
          className={({ isActive }) => {
            return isActive
              ? "text-[#1B1A42] duration-500  p-3 md:p-4 font-bold border-b-[#1b1a42] border-b-2 mx-3 sm:text-sm md:text-lg"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
          }}
        >
          Company
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive
              ? "text-[#1B1A42] duration-500  p-3 md:p-4 mx-3 font-bold border-b-[#1b1A42] border-b-2 sm:text-sm md:text-lg"
              : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
          }}
        >
          Contact
        </NavLink>
      </div>
      <div className="hidden sm:flex">
        <button className=" text-[#1b1a42] px-[6px] text-[10px] md:text-[12px]  md:px-3  py-1 ">
          Login
        </button>
        <button className="bg-[#1B1A42] animate-pulse w-fit h-fit px-[6px] text-[10px]  md:px-3  py-1 text-teal-200 md:text-[12px] rounded-lg">
          Sign Up
        </button>
      </div>
      <div className="sm:hidden block">
        <GiHamburgerMenu size={"30px"} />
      </div>
    </>
  );
};

export default Navbar;
