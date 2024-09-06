import React, { useEffect, useRef, useState } from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
const Donation1 = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  let arr = [
    "Eat 4 days",
    "Helping the kids of ilupeju",
    "Rally of Work",
    "Get enough sanitary pads for orphanages",
    "Building a community school at badagry",
    "Building a health center badagry",
    "Building an health center kano ",
    "Building an health center kaduna",
    "Building an health center kwami",
    "Building an community center kwami",
    "Building an community center mushin",
    "Feeding the kids kano",
    "Feeding the kids borno",
    "Feeding the kids cotonou",
    "Outreach ph",
    "Giveaway Jos",
  ];
  const searchedResult = useRef();
  const [searched, setSearched] = useState(false);
  const { state, dispatch } = ItemContext();
  const { DonSearch, Donation, StoreValueDon, SearchedResDon } = state;
  const res = Donation[0]?.map((user, idx) => {
    return user;
  });
  const [isOpen, setIsOpen] = useState(false);
  const refs = useRef(null);
  const filteredSearch = () => {
    console.log(searched, "skks");
    setSearched(true);
  };
  localStorage.setItem("searchDon", JSON.stringify(StoreValueDon));
  const filter = arr.filter((a) => {
    return a.toLowerCase().includes(DonSearch.toLowerCase());
  });
  const ship = JSON.parse(localStorage.getItem("searchDon"));
  arr = filter;
  const handleSubmit = () => {
    //  e.stopPropagation()

    fetch(`https://konect-api.herokuapp.com/ngo/getDonation/${DonSearch}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "searchedResDon", payload: data });
        navigate(`getDonation/tag=${DonSearch}`);
        console.log(
          Donation[0].map((a) => {
            return a.name;
          })
        );

        // console.log(SearchedRes);
      })
      .catch((err) => {
        dispatch({ type: "error", payload: err });
        console.log(err);
      });
    if (DonSearch) {
      // navigate("/search");
      dispatch({ type: "ADD_TO_RESULTARR_Don", payload: DonSearch });
    }
    const get = localStorage.getItem("searchDon");
    // console.log(SearchedResDon);
    if (get) {
      return JSON.parse(get);
    } else {
      return [];
    }
  };
  const handleClickOutside = (event) => {
    if (refs.current && !refs.current.contains(event.target)) {
      setSearched(false); // Close the div when clicked outside
    }
  };

  // Adding event listener on mount and removing it on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col w-full max-w-full  md:flex-row gap-6  items-center justify-center relative">
      <h2>Donation</h2>
      <div className="flex  flex-col max-w-full  sm:flex-row items-center h-fit gap-2">
        <div className="border border-solid bg-[#EEEEF6] rounded-lg max-w-[400px] h-[40px] ">
          <div className="flex  w-full mb-4 rounded">
            <input
              onFocus={filteredSearch}
              ref={ref}
              onChange={(e) => {
                dispatch({ type: "DonInputVal", payload: e.target.value });
                if (DonSearch === "") {
                  return (arr = []);
                } else {
                  return arr;
                }
              }}
              type="search"
              value={DonSearch}
              className=" flex-auto min-w-0 w-full bg-[#EEEEF6] block px-3 py-1.5 text-base font-normal text-gray-700  bg-clip-padding  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            <span
              onClick={handleSubmit}
              className=" flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </span>
            <div
              // onClick={handleClickOutside}
              ref={refs}
              className={`${
                searched ? "block" : "hidden"
              } bg-blue-500 text-white text-lg w-[25rem] h-fit cursor-pointer absolute z-10 px-10 top-24 md:top-14 `}>
              <div>
                {!DonSearch && (
                  <p className="text-center text-2xl">Recently Searched</p>
                )}
                {DonSearch &&
                  arr?.map((a, idx) => {
                    return (
                      <p
                        key={idx}
                        onClick={() => {
                          dispatch({ type: "DonInputVal", payload: a });
                          // dispatch({ type: "CLEAR_INPUTVAL" });
                          console.log(a);
                          // setSearched(true);
                          return handleSubmit();
                        }}>
                        {a}
                      </p>
                    );
                  })}
                {!DonSearch &&
                  ship?.map((a, idx) => {
                    return (
                      <>
                        <p
                          ref={searchedResult}
                          // className="cursor-pointer"
                          key={idx}
                          onClick={() => {
                            // searchedResult.current.classList.add("hidden");
                            // searchedResult.current.classList.remove("block");
                            // dispatch({ type: "Ngo_InputVal", payload: a });
                            // dispatch({ type: "CLEAR_INPUTVAL" });
                            dispatch({ type: "DonInputVal", payload: a });

                            console.log(searchedResult);
                            // return handleSubmit();
                          }}>
                          {a}
                        </p>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-8 flex rounded-md bg-[#EEEEF6] px-2">
          <p className="text-[#1B1A42] w-full flex items-center justify-between">
            Filter <IoIosArrowForward />
          </p>
        </div>
      </div>
      <div className="bg-[#EEEEF6] rounded-full w-fit h-fit flex items-center p-2 gap-2">
        <div className="bg-[#15E88E] rounded-full w-8 h-8 flex justify-center items-center">
          <HiOutlineLightningBolt />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg text-[#1B1A42]">{res?.length}</p>
          <p className="text-[#595959] text-sm">Registered NGOs</p>
        </div>
      </div>
    </div>
  );
};

export default Donation1;
