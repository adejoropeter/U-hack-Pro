import React, { useRef, useState } from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
const NgoPart1 = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { state, dispatch, error } = ItemContext();
  const { StoreValue } = state;
  const { Ngo, NgoSearch, SearchedRes } = state;
  const [searched, setSearched] = useState(true);
  const res = Ngo[0]?.filter((user, idx) => {
    return idx <= 19;
  });
  const searchedResult = useRef();
  const inputRef = useRef();
  let arr = ["Ayo", "Peter", "Samson", "Dele"];
  // let arr = Ngo[0];
  let as = [
    "Agricultural Sector",
    "Educational Sector",
    "Poverty Elimination",
    "Health Center",
  ];
  // const uni=[...new Set(as)];
  // console.log(uni)
  const filteredSearch = () => {
    console.log(searched);
    setSearched(false);
  };
  // remove duplicates recent value
  const fil = [...new Set(StoreValue)];
  // console.log(fil)
  localStorage.setItem("search", JSON.stringify(fil));
  const filter = as?.filter((a) => {
    return a?.toLowerCase().includes(NgoSearch.toLowerCase());
  });
  const ship = JSON.parse(localStorage.getItem("search"));
  as = filter;
  // console.log(Ngo[0])

  // console.log(uni)
  const handleSubmit = () => {
    //  e.stopPropagation()

    fetch(
      `https://konect-api.herokuapp.com/ngo/getDetailSector?tag=${NgoSearch}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "searchedRes", payload: data });
        navigate(`getDetails/tag=${NgoSearch}`);
      })
      .catch((err) => {
        dispatch({ type: "error", payload: err });
        console.log(err);
      });
    if (NgoSearch) {
      // navigate("/search");
      dispatch({ type: "ADD_TO_RESULTARR", payload: NgoSearch });
    }
    localStorage.setItem("search", JSON.stringify(StoreValue));
    const get = localStorage.getItem("search");
    // console.log(searchRes);
    if (get) {
      return JSON.parse(get);
    } else {
      return [];
    }
  };
  return (
    <div
      onFocus={() => {
        setSearched(true);
      }}
      className="flex flex-col  md:flex-row gap-6 items-center justify-center relative"
    >
      <h2 className="text-lg font-bold">NGOs</h2>
      <div className="flex items-center h-fit gap-2">
        <div className="border border-solid bg-[#EEEEF6] rounded-lg w-[400px] h-[40px] ">
          <div
            className="flex  w-full mb-4 rounded"
            onBlur={() => {
              // setSearched(false)
            }}
          >
            <input
              onClick={filteredSearch}
              ref={ref}
              onChange={(e) => {
                dispatch({ type: "Ngo_InputVal", payload: e.target.value });
                setSearched(false);
                if (NgoSearch === "") {
                  return (arr = []);
                } else {
                  return arr;
                }
              }}
              type="search"
              value={NgoSearch}
              className=" flex-auto min-w-0 bg-[#EEEEF6] block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-clip-padding  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              onClick={handleSubmit}
              className=" flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
            <div
              // ref={searchedResult}
              className={`${
                searched ? "hidden" : "block"
              } bg-blue-500 text-white text-lg w-[25rem] h-fit absolute z-10 px-10 top-24 md:top-14 `}
            >
              <div>
                {!NgoSearch && (
                  <p className="text-center text-2xl">Recently Searched</p>
                )}
                {NgoSearch &&
                  as?.map((a, idx) => {
                    return (
                      <p
                        className="cursor-pointer"
                        key={idx}
                        onClick={() => {
                          dispatch({ type: "Ngo_InputVal", payload: a });
                          // dispatch({ type: "CLEAR_INPUTVAL" });
                          setSearched(true);
                          // return handleSubmit();
                        }}
                      >
                        {a}
                      </p>
                    );
                  })}
                {!NgoSearch &&
                  ship?.map((a, idx) => {
                    return (
                      <>
                        <p
                          className="cursor-pointer"
                          key={idx}
                          onClick={() => {
                            dispatch({ type: "Ngo_InputVal", payload: a });
                            setSearched(true);
                            // dispatch({ type: "CLEAR_INPUTVAL" });
                            // console.log(inputVal);
                            // return handleSubmit();
                          }}
                        >
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
        <div className="bg-[#15E88E]  rounded-full w-8 h-8 flex justify-center items-center">
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

export default NgoPart1;
