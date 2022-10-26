import React from "react";
import { ItemContext } from "../../components/contextApi/statemanagement.contextApi";
import NgoCard from "./NgoCard";

const NgoPart2c = () => {
  const { state, loading, errorMsg, error } = ItemContext();

  const { Ngo} = state;
  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 p-4 gap-10 sm:gap-14 lg:gap-32">
      {!loading &&
        Ngo[0]
          ?.filter((a) => {
            return a.tag === "Health Sector";
          })
          .map((a) => {
            return <NgoCard key={a.id} getNgo={a} />;
          })}
      {loading && (
        <div className="mx-auto flex justify-center animate-spin items-center relative w-8 h-8 border-4 rounded-full">
          <div
            className="bg-white absolute top-0 -right-2 inline-block w-4 h-4  rounded-full"
            role="status"
          >
            <span className=""></span>
          </div>
        </div>
      )}
      {errorMsg && <p>{error}</p>}
    </div>
  );
};

export default NgoPart2c;
