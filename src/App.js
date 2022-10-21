import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Company from "./pages/company/Company";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Donation from "./pages/Donation";
import Volunteer from "./pages/Volunteer";
import Partnership from "./pages/Partnership";
import Faq from "./pages/Faq";
import Message from "./pages/Message";
import { AiOutlineArrowUp } from "react-icons/ai";
import Blog from "./pages/Blog";
import Blog1 from "./pages/blog/Blog1";
import Blog2 from "./pages/blog/Blog2";
import Blog3 from "./pages/blog/Blog3";
import Ngo from "./pages/ngo/Ngo";
import {useQuery} from "@tanstack/react-query"
import { Axios } from "axios";
function App() {
  const {}= useQuery([""],()=>{
    Axios.get("")
  })

  return (
    <>
    
      <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className="rounded-full bg-[#1B1A42] h-10 w-10 fixed right-12 flex justify-center items-center bottom-10 z-40 "
      >
        <AiOutlineArrowUp size={"2rem"} className="text-[#F5F5F5]" />
      </div>
      <div className=" w-full h-[80px] border-b-2 sm:border-none flex justify-between px-6 md:px-10 py-4 bg-white items-center">
        <Navbar />
       
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ngo" element={<Ngo />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="contact/donate" element={<Donation />}></Route>
        <Route path="contact/volunteer" element={<Volunteer />}></Route>
        <Route path="contact/partnership" element={<Partnership />}></Route>
        <Route path="contact/faqs" element={<Faq/>}></Route>
        <Route path="contact/message" element={<Message />}></Route>
        <Route path="company/blog/blog1" element={<Blog1 />}></Route>
        <Route path="company/blog/blog2" element={<Blog2 />}></Route>
        <Route path="company/blog/blog3" element={<Blog3 />}></Route>
        <Route path="*" element={"Page Not found"}></Route>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
