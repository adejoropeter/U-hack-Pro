import React from "react";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import ViewNgo1 from "./ViewNgo1";
import ViewNgo2 from "./ViewNgo2";
import ViewNgo3 from "./ViewNgo3";
import ViewNgo4 from "./ViewNgo4";
import ViewNgo5 from "./ViewNgo5";

const ViewNgo = () => {
  const { state, isLoading } = ItemContext();
  const { viewNgo } = state;
  return (
    <div className="w-full min-h-screen bg-white pt-12 px-20 flex flex-col gap-10">
      {viewNgo?.map((detail) => {
        return (
          <>
            <ViewNgo1 detail={detail} />
            <ViewNgo2 detail={detail}/>
            <ViewNgo3 detail={detail}/>
            <ViewNgo4 detail={detail}/>
            <ViewNgo5 detail={detail}/>
          </>
        );
      })}
    </div>
  );
};

export default ViewNgo;
