import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Company from "./pages/company/Company";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Donation from "./pages/donation/Donation";
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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Axios } from "axios";
import ViewNgo from "./pages/viewNgo/ViewNgo";
import NgoPart2 from "./pages/ngo/NgoPart2";
import NgoPart2b from "./pages/ngo/NgoPart2b";
import NgoPart2c from "./pages/ngo/NgoPart2c";
import NgoPart2d from "./pages/ngo/NgoPart2d";
import { ItemContext } from "./components/contextApi/statemanagement.contextApi";
import SearchedPage from "./pages/SearchedPage";
import Donation2 from "./pages/donation/Donation2";
import Donation2b from "./pages/donation/Donation2b";
import ViewDonation from "./pages/donation/ViewDonation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const client = new QueryClient();

  // const name = (name) => {
  //   const str = name.replaceAll(" ", "%20");

  //   console.log(str);
  // };
  const { state } = ItemContext();
  const { InputVal } = state;
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
      <QueryClientProvider client={client}>
        <BrowserRouter>
        {/* <Login/> */}
          <div className=" w-full h-[80px] border-b-2 sm:border-none flex justify-between px-6 md:px-10 py-4 bg-white items-center">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/ngo" element={<Ngo />}>
              <Route path="all" element={<NgoPart2 />}></Route>
              <Route path="education" element={<NgoPart2b />}></Route>
              <Route path="health-center" element={<NgoPart2c />}></Route>
              <Route path="agricultural-sector" element={<NgoPart2d />}></Route>
            </Route>
            <Route path="/view-donation" element={<ViewDonation />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="ngo/donate" element={<Donation />}>
              <Route path="all" element={<Donation2 />}></Route>
              <Route path="education" element={<Donation2b />}></Route>
              <Route path="health-center" element={<Donation2b />}></Route>
              <Route path="agricultural-sector" element={<NgoPart2d />}></Route>
            </Route>
            <Route path="contact/volunteer" element={<Volunteer />}></Route>
            <Route path="contact/partnership" element={<Partnership />}></Route>
            <Route path="contact/faqs" element={<Faq />}></Route>
            <Route path="contact/message" element={<Message />}></Route>
            <Route path="company/blog/blog1" element={<Blog1 />}></Route>
            <Route path="company/blog/blog2" element={<Blog2 />}></Route>
            <Route path="company/blog/blog3" element={<Blog3 />}></Route>
            <Route path="view" element={<ViewNgo />}></Route>
            <Route
              path="ngo/getDetails/:user"
              element={<SearchedPage />}
            ></Route>
            <Route path="*" element={"Page Not found"}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
