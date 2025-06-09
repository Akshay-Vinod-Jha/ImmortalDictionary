import React from "react";
import { IoArrowBack } from "react-icons/io5";
import PartSelectionPage from "../Pages/PartSelectionPage";
const Back = (props) => {
  return (
    <>
      <IoArrowBack
        className="text-xl md:text-2xl bg-[#953cd0] mt-2 mb-4 ml-1 md:ml-4 py-2 px-4 rounded-md w-max h-max flex justify-center items-center"
        onClick={() => {
          props.setToDisplayCorrespondingFunction(
            <PartSelectionPage
              setToDisplayCorrespondingFunction={
                props.setToDisplayCorrespondingFunction
              }
            />
          );
        }}
      />
      <h1 className="w-max h-max  flex justify-start items-center gap-4  pt-2 px-1 md:px-4 font-importantFont text-2xl md:text-3xl tracking-widest font-bold">
        {props.title}
        {props.icon}
      </h1>
    </>
  );
};

export default Back;
