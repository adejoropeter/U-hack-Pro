import React, { useRef, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import CustomButton from "../components/CustomButton";
const Faq = () => {
  const [done, setDone] = useState(false);
  const [showQuest1, setShowQuest1] = useState(false);
  const [showQuest2, setShowQuest2] = useState(true);
  const [showQuest3, setShowQuest3] = useState(false);
  const [showQuest4, setShowQuest4] = useState(false);
  const [showQuest5, setShowQuest5] = useState(false);
  const [showQuest6, setShowQuest6] = useState(false);
  const [showQuest7, setShowQuest7] = useState(false);
  const [showQuest8, setShowQuest8] = useState(false);
  const focus = useRef();

  return (
    <div className="w-full min-h-screen bg-white pt-12">
      hid
    </div>
  );
};

export default Faq;
// bg-[#EEEEF6]
