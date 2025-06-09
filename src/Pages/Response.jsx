import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import { FaBookmark } from "react-icons/fa";
const Response = (props) => {
  return (
    <div className="w-full grid grid-cols-1 place-content-start place-items-start gap-2">
      {props.show && (
        <h1 className="w-full flex justify-end items-center my-4 text-xl md:text-2xl">
          <FaBookmark
            className={`${props.bookmark ? "text-yellow-500" : "text-white"}`}
            onClick={() => {
              if (!props.bookmark) {
                console.log("add to bookmark");
                console.log(localStorage.getItem("FavouritesOfDictionary"));
                localStorage.setItem(
                  "FavouritesOfDictionary",
                  JSON.stringify([
                    ...JSON.parse(
                      localStorage.getItem("FavouritesOfDictionary")
                    ),
                    [...props.data],
                  ])
                );
                console.log(
                  JSON.parse(localStorage.getItem("FavouritesOfDictionary"))
                );
              } else {
                try {
                  console.log("delete from bookmark");
                  let temp = JSON.parse(
                    localStorage.getItem("FavouritesOfDictionary")
                  );
                  temp.splice(temp.length - 1, 1);
                  localStorage.setItem(
                    "FavouritesOfDictionary",
                    JSON.stringify([...temp])
                  );
                  console.log(
                    JSON.parse(localStorage.getItem("FavouritesOfDictionary"))
                  );
                } catch (e) {
                  console.log(e);
                }
              }
              props.setBookMark((previousValue) => {
                return !previousValue;
              });
            }}
          />
        </h1>
      )}
      {props.data.map((value, index) => {
        return (
          <div
            key={"Response" + index}
            className="w-full my-2 h-auto grid grid-cols-1 gap-4 place-content-center place-items-start bg-[#ffffff17]  pl-1 pr-2 md:px-4 rounded-3xl py-2 md:py-6"
          >
            <h1 className="w-max bg-[#953cd0] ml-1 px-2 py-2 rounded-md capitalize font-semibold text-base md:text-lg lg:text-xl">
              {props.data[index].word}
            </h1>
            {props.data[index].phonetics.length !== 0 && (
              <Phonetics phonetics={props.data[0].phonetics} />
            )}
            {props.data[index].meanings.length !== 0 && (
              <Meanings meanings={props.data[0].meanings} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Response;
