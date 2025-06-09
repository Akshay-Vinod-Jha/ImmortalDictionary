import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Antonyma from "./Antonyma";
import Synonyms from "./Synonyms";
import Copy from "../UI/Copy";

const Meanings = (props) => {
  const [index, setIndex] = useState(0);
  const [indexTo, setIndexTo] = useState(0);
  return (
    <div className="w-full grid grid-cols-1 gap-4 place-content-center place-items-start py-2 font-importantFont h-full bg-[#953cd0] px-2  ml-1 rounded-md">
      <div className="w-full h-auto font-importantFont py-2 font-semibold text-base md:text-lg lg:text-xl">
        Meanings:
        <span className="block w-max px-2 py-2 bg-[#591382] rounded-md">
          <span className="text-black mr-4">Total Available Length:</span>{" "}
          {props.meanings.length}
        </span>
      </div>
      <div className="w-full">
        <span className="w-max px-2 py-2 text-base md:text-lg lg:text-xl capitalize bg-[#591382] rounded-md">
          {props.meanings[index].partOfSpeech}
        </span>
        <div className="w-full mt-3 h-auto px-2 py-2 capitalize bg-[#591382] rounded-md">
          <h1 className="w-full my-2 text-base md:text-lg lg:text-xl font-importantFont ">
            Definitions:
            <span className="block bg-[#953cd0] font-semibold px-2 py-2  rounded-md">
              <span className="text-black font-bold mr-2">
                Total definitions Available:-
              </span>
              {props.meanings[index].definitions.length}
            </span>
          </h1>
          <div className="text-sm my-2 md:text-base lg:text-lg font-importantFont">
            <h1 className="text-black font-bold tracking-wide">
              Meaning ({indexTo + 1})
            </h1>
            <div className="w-full h-auto py-2 px-2 bg-[#953cd0] mt-1 rounded-md tracking-wide">
              <h1 className="w-full">
                {props.meanings[index].definitions[indexTo].definition}
              </h1>
              <Copy
                toCopy={props.meanings[index].definitions[indexTo].definition}
              />
              {props.meanings[index].definitions[indexTo].example && (
                <>
                  <h1 className="w-full bg-[#591382] py-2 px-2 rounded-md my-2">
                    <p className="text-black font-bold tracking-wide font-importantFont w-max border-b-2 border-black mb-2">
                      Example:-
                    </p>
                    {props.meanings[index].definitions[indexTo].example}
                  </h1>
                  <Copy
                    toCopy={props.meanings[index].definitions[indexTo].example}
                  ></Copy>
                </>
              )}
              <div className="w-full py-2 flex justify-between items-center">
                {indexTo !== 0 ? (
                  <button
                    className=" self-start"
                    onClick={() => {
                      if (indexTo !== 0) {
                        setIndexTo((previousValue) => {
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
                {indexTo !== props.meanings[index].definitions.length - 1 ? (
                  <button
                    className=" self-end"
                    onClick={() => {
                      if (
                        indexTo + 1 !==
                        props.meanings[index].definitions.length
                      ) {
                        setIndexTo((previousValue) => {
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
          </div>
        </div>
      </div>
      {props.meanings[index].antonyms.length !== 0 && (
        <Antonyma antonyms={props.meanings[index].antonyms} />
      )}
      {props.meanings[index].synonyms.length !== 0 && (
        <Synonyms synonyms={props.meanings[index].synonyms} />
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
                setIndexTo(0);
              }
            }}
          >
            <GrFormPrevious className="text-3xl w-max px-4 py-2 bg-[#591382] rounded-md font-extrabold" />
          </button>
        ) : (
          <div></div>
        )}
        {index !== props.meanings.length - 1 ? (
          <button
            className=" self-end"
            onClick={() => {
              if (index + 1 !== props.meanings.length) {
                setIndex((previousValue) => {
                  return previousValue + 1;
                });
                setIndexTo(0);
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

export default Meanings;
