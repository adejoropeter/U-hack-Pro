import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { ItemContext } from "./contextApi/statemanagement.contextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { isAuth, setIsAuth } = ItemContext();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [navLink, setNavLink] = useState(false);
  return (
    <>
      <div className="h-fit">
        <Link to="/">
          <img
            src="/assets/headerLogo.png"
            alt="app-logo(konect)"
            className="w-[150px] h-[55px] object-cover"
          />
        </Link>
      </div>
      {isAuth ? (
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
      ) : null}

      {isAuth ? (
        <button
          onClick={() => {
            navigate("/start");
            setIsAuth(false);
          }}
          className="bg-[#1B1A42] hidden sm:block  w-fit h-fit px-[6px] text-lg  md:px-3  py-1 text-white  rounded-lg"
        >
          Log Out
        </button>
      ) : (
        <div className="hidden sm:flex">
          <button
            onClick={() => navigate("login")}
            className=" text-[#1b1a42] px-[6px]  md:text-lg  md:px-3  py-1 "
          >
            Login
          </button>
          <button
            onClick={() => navigate("signup")}
            className="bg-[#1B1A42]  w-fit h-fit px-[6px] md:text-lg  md:px-3  py-1 text-white  rounded-lg"
          >
            Sign Up
          </button>
        </div>
      )}

      <div className="sm:hidden " onClick={handleClick}>
        {nav ? null : (
          <GiHamburgerMenu size={"30px"} className="duration-500" />
        )}
      </div>
      {nav ? (
        <div className="sm:hidden absolute w-screen h-screen top-0 right-0 bg-[#EEEEF6] z-10">
          <div
            onClick={handleClick}
            className="flex justify-between items-center p-10"
          >
            <Link to="/">
              <img
                src="/assets/headerLogo.png"
                alt="app-logo(konect)"
                className="w-[100px] h-[46px] object-cover"
              />
            </Link>
            <FaTimes className="text-[#1B1A42]  duration-500" />
          </div>
          <div className="sm:hidden flex flex-col pt-20 border-t-2 px-10">
            <NavLink
              to="/"
              onClick={() => setNav(!nav)}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#1B1A42] duration-500  sm:text-sm md:text-lg p-3 md:p-4  mx-3   font-bold"
                  : " text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
              }}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setNav(!nav)}
              to="/ngo"
              className={({ isActive }) => {
                return isActive
                  ? "text-[#1B1A42] duration-500 sm:text-sm md:text-lg p-3 md:p-4  mx-3   font-bold"
                  : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
              }}
            >
              NGOs
            </NavLink>

            <NavLink
              to="/company"
              onClick={() => setNav(!nav)}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#1B1A42] duration-500  p-3 md:p-4 font-bold ] mx-3 sm:text-sm md:text-lg"
                  : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
              }}
            >
              Company
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setNav(!nav)}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#1B1A42] duration-500  p-3 md:p-4 mx-3 font-bold  sm:text-sm md:text-lg"
                  : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
              }}
            >
              Contact
            </NavLink>
            {isAuth ? (

              <NavLink
              to="/login"
              onClick={() => {
                setIsAuth(false)
                setNav(!nav)}}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#1B1A42] duration-500  p-3 md:p-4 mx-3 font-bold  sm:text-sm md:text-lg"
                  : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
              }}
            >
              Log Out

            </NavLink>
            ) : (
              <NavLink
              to="/login"
              onClick={() => setNav(!nav)}
              className={({ isActive }) => {
                return isActive
                  ? "text-[#1B1A42] duration-500  p-3 md:p-4 mx-3 font-bold  sm:text-sm md:text-lg"
                  : "text-[rgba(0,0,0,0.5)] p-3 md:p-4 mx-3 sm:text-sm md:text-lg";
              }}
            >
              Log In
            </NavLink>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
