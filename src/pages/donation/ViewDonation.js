import React, { useRef, useState } from "react";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import CustomButton from "../../components/CustomButton";
import PaystackPop from "@paystack/inline-js";
import { BsCheck2Circle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const ViewDonation = () => {
  const {
    donAmt,
    setDonAmt,
    checked,
    setChecked,
    five,
    twenty,
    twentyFive,
    fifty,
    hund,
    twoHun,
    state,
  } = ItemContext();
  const navigate = useNavigate();
  const { viewDonation } = state;
  const [errMsg, setErrMsg] = useState("Please check Paystack");
  const [bool, setBool] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const focus = useRef(null);
  const handleClick = () => {
    console.log("ki");

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_897d4d53fc6fb4846b51207ffbe0bf8637fb67dc",
      amount: donAmt * 100,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        let message = "PAyment Complete";
        navigate("/");
        document.documentElement.scrollTop = 0;
      },
      onCancel() {
        alert("You have canceled the transaction");
        navigate("/");
        document.documentElement.scrollTop = 0;
      },
    });
  };
  setTimeout(() => {
    setBool(false);
  }, 3000);
  return (
    <div className="flex flex-col md:flex-row w-screen gap-10 px-20 py-10">
      {/* Img */}
      <div className="md:w-1/4  h-fit">
        <img
          src="/assets/happy-children.png"
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>
      {/* Helpin Part */}
      <div className="md:w-3/4">
        <div className="flex justify-between ">
          <h2 className="text-xl">{viewDonation?.name}</h2>
          <div className="border rounded-full w-fit flex justify-center items-center">
            <p className="text-sm">Updated 3 weeks ago</p>
          </div>
        </div>
        <div className="bg-[#EEEEF6] p-4 w-full my-4 flex justify-between">
          <div className="flex gap-4 items-center">
            <img src="/assets/Peacock.png" className="w-10" />
            <p>{viewDonation?.orgName}</p>
          </div>
          <div className="border rounded-full w-fit flex justify-center items-center">
            View NGO
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <p className="flex-1">Donation Details</p>
          <p>Category: {viewDonation?.category}</p>
          <div>
            <CustomButton>Share this page</CustomButton>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mb-6">
          <p>{viewDonation?.detail}</p>
        </div>
        {/* Donation Progress will add a div above and cancel one below*/}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl">Donation Progress</h2>
          <div className="flex flex-col gap-3">
            <p>N200,000,000 of N500,000</p>
            <div className="w-[90%] h-2 rounded-full mb-4 bg-[#EEEEF6] overflow-hidden">
              <p className="h-full w-[85%] bg-[#1B1A42] rounded-full"></p>
            </div>
          </div>
        </div>
        {/* Donation Amount */}
        <div className="mb-4">
          <h2 className="mb-4">Donation Amount</h2>
          <div className="flex flex-wrap gap-4">
            <div
              ref={five}
              onClick={() => {
                console.log(five.current.textContent);
                setDonAmt(five.current.textContent);
              }}
              className="border cursor-pointer w-36 py-1 flex justify-center items-center"
            >
              5000
            </div>
            <div
              ref={twenty}
              onClick={() => {
                console.log(twenty.current.textContent);
                setDonAmt(twenty.current.textContent);
              }}
              className="border cursor-pointer w-36 py-1 flex justify-center items-center"
            >
              20000
            </div>
            <div
              ref={twentyFive}
              onClick={() => {
                console.log(twentyFive.current.textContent);
                setDonAmt(twentyFive.current.textContent);
              }}
              className="border cursor-pointer w-36 py-1 flex justify-center items-center"
            >
              25000
            </div>
            <div
              ref={fifty}
              onClick={() => {
                console.log(fifty.current.textContent);
                setDonAmt(fifty.current.textContent);
              }}
              className="border cursor-pointer w-36 py-1 flex justify-center items-center"
            >
              50000
            </div>
            <div
              ref={hund}
              onClick={() => {
                console.log(hund.current.textContent);
                setDonAmt(hund.current.textContent);
              }}
              className="border cursor-pointer w-36 py-1 flex justify-center items-center"
            >
              100000
            </div>
            <div
              ref={twoHun}
              onClick={() => {
                console.log(twoHun.current.textContent);
                setDonAmt(twoHun.current.textContent);
              }}
              className="border cursor-pointer w-36 py-1 flex justify-center items-center"
            >
              200000
            </div>
          </div>
        </div>
        {/* Other Amount */}
        <div className="mb-4 flex flex-col gap-5">
          <h4 className="mb-4">Other Amount</h4>
          <input
            value={donAmt}
            onChange={(e) => setDonAmt(e.target.value)}
            className="bg-[#EEEEF6] w-64 py-2 px-2 text-sm"
            placeholder="Enter Donation Amount in Naira"
          />
          <input
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#EEEEF6] w-64 py-2 px-2 text-sm"
            placeholder="Enter First Name"
          />
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#EEEEF6] w-64 py-2 px-2 text-sm"
            placeholder="Enter Last Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#EEEEF6] w-64 py-2 px-2 text-sm"
            placeholder="Enter Email"
          />
        </div>
        {/* payment Detail */}
        <div className="mb-4">
          <h4 className="mb-4">Payment Details</h4>
          <div className="flex gap-4 border h-10 items-center px-4">
            <input
              onChange={() => setChecked(!checked)}
              type="checkbox"
              checked={checked}
              placeholder="Enter Donation Amount in Naira"
            />
            <img src="/assets/paystack.png" />
          </div>
        </div>
        <div
          className=" mx-auto"
          onClick={() => {
            if (  !lastname || !email || !firstname) {
              setErrMsg("fill out the fields");
              setBool(true);
            } else if (!checked) {
              setErrMsg("Please Check Paystack");
              setBool(true);
            } else {
              handleClick();
            }
          }}
        >
          <CustomButton isBool={false} text="white" width="15rem" bg="#1B1A42">
            Confirm Payment
          </CustomButton>
        </div>
        <p className="text-center text-sm">
          By clicking "Confirm Payment" you agree to the Terms and Conditions.
        </p>
        <div
          className={`${
            bool
              ? "fixed flex justify-center items-center bottom-10  left-[50%] bg-red-500 text-white   p-3 rounded-full"
              : "hidden"
          }`}
        >
          <p className="gap-4 flex justify-center items-center">
            {" "}
            <BsCheck2Circle />
            {errMsg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDonation;
