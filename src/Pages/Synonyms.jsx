import React from "react";

const Synonyms = (props) => {
  return (
    <div className="w-full p-2 text-base md:text-lg lg:text-xl font-importantFont bg-[#591382] rounded-md py-4 px-2">
      <h1 className="w-full ">Synonyms:</h1>
      <span className="block bg-[#953cd0] font-semibold px-2 py-2  rounded-md">
        <span className="text-black font-bold mr-2">
          Total Synonyms Available:-
        </span>
        {props.synonyms.length}
      </span>
      <div className="w-full mt-4 h-auto grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
        {props.synonyms.map((value, index) => {
          return (
            <div
              key={"synonyms" + index}
              className="bg-[#953cd0] py-2 text-sm md:text-base lg:text-lg rounded-md border-2 capitalize font-semibold tracking-wide border-[#ffffff3b] text-center"
            >
              {value}
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default Synonyms;
