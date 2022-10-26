import React from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import CustomButton from "../../components/CustomButton";

const DonationCard = ({ detail }) => {
  const { dispatch ,state} = ItemContext();
  console.log(state.viewDonation)
  const navigate = useNavigate();
  const handleClick = (detail) => {
    navigate("/view-donation");
    dispatch({ type: "view Donation", payload: detail });
    document.documentElement.scrollTop = 0;
    // window.location.reload()
  console.log(state.viewDonation)

  };
  return (
    <div className="flex   h-fit  gap-4">
      <div className="flex-shrink-0 w-64 lg:w-80 border h-fit bg-white rounded-xl overflow-hidden scrollbar-hide">
        <img
          src="/assets/happy-children.png"
          className="w-full h-24 md:h-32 object-cover"
        />
        <div className="w-full p-4">
          <h2 className="text-[#1B1A42] mb-4">{detail.name}</h2>
          <h3 className="mb-4">N260,000 of N500,000</h3>
          <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
            <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
          </div>
          <div onClick={() => handleClick(detail)}>
            <CustomButton
              width="100%"
              pad="10px 0px"
              bg="#1B1A42"
              text="white"
              spacing="auto"
              isBool={true}
            >
              View Donations Details
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
