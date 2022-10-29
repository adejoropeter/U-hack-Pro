import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const HomePart7 = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-fit flex flex-col justify-center items-center gap-4 px-10">
      <p className=" text-[#F5F5F5]  sm:text-2xl  font-normal">
        The door to Konect is always open to people who want to impact lives.
      </p>
      <div onClick={() => navigate("ngo/donate")}>
        <CustomButton
          width=""
          pad="0px 30px"
          isBool={true}
          text="white"
          bg="transparent"
          brWid="1px 2px"
          brCol="white"
        >
          Donate Now
        </CustomButton>
      </div>
    </div>
  );
};

export default HomePart7;
