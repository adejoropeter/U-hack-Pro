import { ItemContext } from "../components/contextApi/statemanagement.contextApi";
import CustomButton from "../components/CustomButton";

const SearchedPage = () => {
  const { state, dispatch, error } = ItemContext();
  const { SearchedRes, SearchedResDon } = state;
  console.log(SearchedRes);
  console.log(SearchedResDon);
  // console.log(SearchedRes);
  return (
    <>
      {SearchedRes?.map((getNgo) => {
        return <div className="text-center text-4xl">Result For {getNgo.name}</div>;
      })}
      {SearchedResDon?.map((getNgo) => {
        return <div className="text-center text-4xl">Result For {getNgo.name}</div>;
      })}
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 p-4 gap-10 sm:gap-14 lg:gap-32">
        {" "}
        {SearchedRes?.map((getNgo) => {
          return (
            <div className="w- sm:w-[230px] lg:w-[300px] h-fit bg-[#EEEEF6] py-5 flex flex-col gap-4 rounded-2xl">
              <div className="flex items-center gap-2 mx-4">
                <img src="/assets/PandG.png" className="w-8 h-8 rounded-full" />
                <p className="text-sm">{getNgo.name}</p>
              </div>
              <p className="border"></p>
              <div className="flex gap-4  items-center mx-4">
                <div className="flex gap-2 items-center">
                  <span className="text-[#8FABC1] text-xl">56</span>
                  <span className="text-[#595959] text-sm">
                    active donations
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {SearchedResDon?.map((getNgo) => {
          return (
            <div className="w- sm:w-[230px] lg:w-[300px] h-fit bg-[#EEEEF6] py-5 flex flex-col gap-4 rounded-2xl">
              <div className="flex items-center gap-2 mx-4">
                <img src="/assets/PandG.png" className="w-8 h-8 rounded-full" />
                <p className="text-sm">{getNgo.name}</p>
              </div>
              <p className="border"></p>
              <div className="flex gap-4  items-center mx-4">
                <div className="flex gap-2 items-center">
                  <span className="text-[#8FABC1] text-xl">56</span>
                  <span className="text-[#595959] text-sm">
                    active donations
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {/* {!SearchedRes? "Nothing To Show":SearchedRes} */}
      </div>
    </>
  );
};

export default SearchedPage;
