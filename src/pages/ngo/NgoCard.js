import React from "react";
import CustomButton from "../../components/CustomButton";

const NgoCard = () => {
  return (
    <div className="sm:w-[230px] lg:w-[300px] h-fit bg-[#EEEEF6] py-5 flex flex-col gap-4 rounded-2xl">
      <div className="flex items-center gap-2 mx-4">
        <img src="/assets/PandG.png" className="w-8 h-8 rounded-full" />
        <p className="text-sm">Feed the kids NG</p>
      </div>
      <p className="border"></p>
      <div className="flex gap-4  items-center mx-4">
        <div className="flex gap-2 items-center">
          <span className="text-[#8FABC1] text-xl">56</span>
          <span className="text-[#595959] text-sm">active donations</span>
        </div>
        <div>
          <CustomButton brCol="#1B1A42" brWid="1px" width="100px" isBool={true} bg="white">
            View NGO{" "}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
