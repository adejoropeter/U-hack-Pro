import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  const scroll=()=>{
    document.documentElement.scrollTop = 0;

  }
  return (
    <div className="w-full h-fit bg-[#EEEEF6] flex flex-col px-6 md:px-10 py-10">
        <div className="border-[#1b1a42] border-b-2 mb-6"></div>
        <div className="flex flex-col sm:flex-row ">
          <div className="sm:mr-6 flex flex-col justify-between mb-5">
            <img src="/assets/headerLogo.png" alt="app-logo(konect)" className="w-[94px] h-[43px] object-cover"/>
            <p className="text-sm text-[#000000] max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum
              veniam recusandae ad quibusdam quas nemo, harum eveniet error quos
              eius quaerat a repellendus consectetur odit, eaque nobis? Hic,
              laborum.
            </p>
            <div className="flex ">
              <FaFacebook className="mr-6" size="20px" />
              <AiOutlineTwitter className="mr-6" size="20px" />
              <SiInstagram size="20px" />
            </div>
          </div>

          <div className="flex justify-between flex-1 flex-wrap sm:flex-nowrap">
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-lg text-[#1B1A42] font-semibold ">
                Pages
              </h1>
                <Link to="/" className="mt-6 text-sm sm:text-md" onClick={scroll}>Home</Link>
                <Link to="/ngo" className="mt-6 text-sm sm:text-md" onClick={scroll}>NGOs</Link>
                <Link to="/company" className="mt-6 text-sm sm:text-md" onClick={scroll}>Company</Link>
                <Link to="/contact" className="mt-6 text-sm sm:text-md" onClick={scroll}>Contact</Link>
            </div>
            <div className="flex flex-col ml-4 ">
              <h1 className="text-sm sm:text-lg text-[#1B1A42] font-semibold ">
                Resources
              </h1>
                <Link to="company/blog/blog1" className="mt-6 text-sm sm:text-md" onClick={scroll}>Blog</Link>
                <Link to="/testimonial" className="mt-6 text-sm sm:text-md" onClick={scroll}>Testimonial</Link>
                <Link to="/faq" className="mt-6 text-sm sm:text-md" onClick={scroll}>FAQs</Link>
                <Link to="/volunteer" className="mt-6 text-sm sm:text-md" onClick={scroll}>Volunteer</Link>

            </div>
            <div className="flex flex-col ml-4 ">
              <h1 className="text-sm sm:text-lg text-[#1B1A42] font-semibold mb-6">
                {" "}
                Legal
              </h1>
              <ul className="">
                <li className="text-sm sm:text-md">Privacy policy</li>
                <li className="mt-6 text-sm sm:text-md">Terms &amp; Conditions</li>
              </ul>
            
            </div>
            <div className="flex flex-col pb-10">
              <h1 className="text-sm mt-6 sm:mt-0 sm:text-lg text-[#1B1A42] font-semibold mb-6">
                Contact
              </h1>
              <div className="flex items-center">
                <BsTelephone />
                <span className="ml-2 text-sm sm:text-md">+234 812 822 4734</span>
              </div>
              <div className="flex items-center mt-6">
                <SlLocationPin />
                <span className="ml-2 text-sm sm:text-md">support@konect.com</span>
              </div>
              <div className="flex items-center mt-6">
                <MdOutlineMail />
                <span className="ml-2 text-sm sm:text-md">88 Keffi Street, Lagos, Nigeria </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-16 items-center justify-between">
          <div className="border-[#1b1a42] border-b-2 flex-1"></div>
          <div className="mx-6">
            <img src="/assets/headerLogo.png" alt="app-logo(konect)" className="object-cover"/>
          </div>
          <div className="border-[#1b1a42] border-b-2 flex-1"></div>
        </div>
        <div className="text-center"> &copy; Copyright {new Date().getFullYear()} Konect</div>
      </div>
  );
};

export default Footer;
