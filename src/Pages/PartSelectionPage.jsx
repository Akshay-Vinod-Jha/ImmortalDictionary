import React from "react";
import EditedButton from "../UI/EditedButton";
import SearchWord from "./SearchWord";
import SeeFavourites from "./SeeFavourites";
import CheckHistory from "./CheckHistory";
import Feedback from "./Feedback";
import "./PartSelectionPage.css";
const PartSelectionPage = (props) => {
  return (
    <>
      <div className="ripple-background absolute w-screen h-screen top-0 left-0 -z-20">
        <div className="circle xxxlarge shade0"></div>
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div>
      <div className=" w-screen font-importantFont h-[100vh] flex flex-col justify-center gap-4 items-center">
        <h1 className="w-max h-auto text-3xl md:text-[3.6rem] lg:text-[3.6rem] flex justify-center items-center tracking-widest font-extrabold text-[#953cd0]">
          Dictionary{" "}
        </h1>
        <span className="text-2xl w-max max-w-full text-center px-4 font-extrabold tracking-widest">
          Unlock the World with Words: Your Gateway to Infinite Knowledge!
        </span>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 md:w-[100%] lg:w-[85%] xl:w-[75%] place-content-center place-items-center gap-3 w-full px-2">
          {[
            [
              "Search Word",
              <SearchWord
                setToDisplayCorrespondingFunction={
                  props.setToDisplayCorrespondingFunction
                }
              />,
            ],
            [
              "See Favourites",
              <SeeFavourites
                setToDisplayCorrespondingFunction={
                  props.setToDisplayCorrespondingFunction
                }
              />,
            ],
            [
              "Check History",
              <CheckHistory
                setToDisplayCorrespondingFunction={
                  props.setToDisplayCorrespondingFunction
                }
              />,
            ],
            [
              "Provide Feedback",
              <Feedback
                setToDisplayCorrespondingFunction={
                  props.setToDisplayCorrespondingFunction
                }
              />,
            ],
          ].map((value, index) => {
            return (
              <EditedButton
                key={"EditedButton" + index}
                className="text-lg text-white  font-semibold bg-[#953cd0] uppercase"
                onClick={() => {
                  props.setToDisplayCorrespondingFunction(value[1]);
                }}
              >
                {value[0]}
              </EditedButton>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PartSelectionPage;
