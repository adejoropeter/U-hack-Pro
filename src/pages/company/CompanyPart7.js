import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const CompanyPart7 = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/company/blog/blog1`)
    document.documentElement.scrollTop = 0;

  }
  const handleClick2=()=>{
    navigate(`/company/blog/blog2`)
    document.documentElement.scrollTop = 0;

  }
  const handleClick3=()=>{
    navigate(`/company/blog/blog3`)
    document.documentElement.scrollTop = 0;

  }
  
  return (
    <div className="px-24  sm:px-20 py-10">
      <h1 className="text-xl font-normal mb-10">Our Latest Articles</h1>
      <div class="flex flex-col sm:flex-row gap-6 items-center sm:justify-between">
        <div className="flex flex-col w-[300px] rounded-lg bg-white shadow-lg">
          <img
            className="rounded-t-2xl md:h-36 object-cover w-full"
            src="/assets/poverty.png"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
            The State of Poverty In Ilupeju
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              quisque lorem quis faucibus tortor nunc.
            </p>
            <div className="flex justify-end" onClick={handleClick}>
              <CustomButton
                isBool={true}
                brCol="#1B1A42"
                brWid="1px"
                bg="white"
              >
                {" "}
                Read Blog <MdKeyboardArrowRight />{" "}
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[300px] rounded-lg bg-white shadow-lg">
          <img
            className="  sm:h-96 md:h-auto object-cover w-full"
            src="/assets/water.png"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Over 100 million kids are homeless in Nigeria.
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              quisque lorem quis faucibus tortor nunc.
            </p>
            <div className="flex justify-end" onClick={handleClick2}>
              <CustomButton
                isBool={true}
                brCol="#1B1A42"
                brWid="1px"
                bg="white"
              >
                {" "}
                Read Blog <MdKeyboardArrowRight />{" "}
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[300px] rounded-lg bg-white shadow-lg">
          <img
            className="  sm:h-96 md:h-auto object-cover w-full"
            src="/assets/children-playing.png"
            alt=""
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Helping the kids of Iiupeju{" "}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              quisque lorem quis faucibus tortor nunc.
            </p>
            <div className="flex justify-end" onClick={handleClick3}>
              <CustomButton
                isBool={true}
                brCol="#1B1A42"
                brWid="1px"
                bg="white"
              >
                {" "}
                Read Blog <MdKeyboardArrowRight />{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPart7;
