import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Copy from "../UI/Copy";
const Phonetics = (props) => {
  //   console.log(props.phonetics);
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full grid grid-cols-1 place-content-center place-items-start py-2 font-importantFont h-full bg-[#953cd0] px-2  ml-1 rounded-md">
      <div className="w-full h-auto font-importantFont py-2 font-semibold text-base md:text-lg lg:text-xl">
        Phonetics:{" "}
        <span className="block w-max px-2 py-2 mt-1 bg-[#591382] rounded-md">
          <span className="text-black mr-4">Total Available Length:</span>{" "}
          {props.phonetics.length}
        </span>
      </div>
      <span className="w-max px-2 mt-2 py-2 bg-[#591382] rounded-md">
        {props.phonetics[index].text}
      </span>
      <Copy toCopy={props.phonetics[index].text} />
      {props.phonetics[index].audio !== "" && (
        <audio
          controls
          src={props.phonetics[index].audio}
          className="my-4"
        ></audio>
      )}
      <div className="w-full py-2 flex justify-between items-center">
        {index !== 0 ? (
          <button
            className=" self-start"
            onClick={() => {
              if (index !== 0) {
                setIndex((previousValue) => {
                  return previousValue - 1;
                });
              }
            }}
          >
            <GrFormPrevious className="text-3xl w-max px-4 py-2 bg-[#591382] rounded-md font-extrabold" />
          </button>
        ) : (
          <div></div>
        )}
        {index !== props.phonetics.length - 1 ? (
          <button
            className=" self-end"
            onClick={() => {
              if (index + 1 !== props.phonetics.length) {
                setIndex((previousValue) => {
                  return previousValue + 1;
                });
              }
            }}
          >
            <MdNavigateNext className="text-3xl w-max px-4 py-2 bg-[#591382] rounded-md font-extrabold" />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Phonetics;
