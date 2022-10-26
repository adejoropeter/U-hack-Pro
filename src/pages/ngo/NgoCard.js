import React from "react";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

const NgoCard = ({ getNgo }) => {
  const navigate = useNavigate();
  const { dispatch, state } = ItemContext();
  const { viewNgo } = state;
  const handleClick = (detail) => {

    dispatch({ type: "view Ngo", payload: detail });
    navigate("/view");
    document.documentElement.scrollTop = 0;
    console.log(viewNgo);
    // window.location.reload()
  };
  return (
    <div className="sm:w-[230px] lg:w-[300px] h-fit bg-[#EEEEF6] py-5 flex flex-col gap-4 rounded-2xl">
      <div className="flex items-center gap-2 mx-4">
        <img src="/assets/PandG.png" className="w-8 h-8 rounded-full" />
        <p className="text-sm">{getNgo.name}</p>
      </div>
      <p className="border"></p>
      <div className="flex gap-4  items-center mx-4">
        <div className="flex gap-2 items-center">
          <span className="text-[#8FABC1] text-xl">56</span>
          <span className="text-[#595959] text-sm">active donations</span>
        </div>
        <div onClick={() => handleClick(getNgo)}>
          <CustomButton
            brCol="#1B1A42"
            brWid="1px"
            width="100px"
            isBool={true}
            bg="white"
          >
            View NGO{" "}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
