import React, { useEffect, useState } from "react";
import Back from "../UI/Back";
import { FaBookmark } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import Response from "./Response";
import cssClasses from "./CheckHistory.module.css";
const SeeFavourites = (props) => {
  const [data, setData] = useState([]);
  const [animatoin, setAnimation] = useState([-1, [], []]);
  const [lastState, setLastState] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);
  useEffect(() => {
    localStorage.getItem("FavouritesOfDictionary") === null
      ? localStorage.setItem("FavouritesOfDictionary", JSON.stringify([]))
      : console.log("aahe");
    setData([...JSON.parse(localStorage.getItem("FavouritesOfDictionary"))]);
  }, []);
  return (
    <div className="w-screen h-screen overflow-scroll no-scrollbar">
      <Back
        title="Favourites"
        setToDisplayCorrespondingFunction={
          props.setToDisplayCorrespondingFunction
        }
        icon={<FaBookmark className="text-yellow-500" />}
      />
      <div
        className={`md:px-4  px-1 py-2 w-full min-h-screen h-auto grid grid-cols-1 grid-rows-* md:grid-cols-2 place-content-start place-items-start gap-2 md:gap-4 lg:gap-6`}
      >
        {" "}
        {data.length === 0 && (
          <div className="w-full px-1 md:px-4 font-importantFont capitalize rounded-md h-auto py-2 bg-[#953cd0]">
            <h1 className="w-full border-b-2 pt-2 flex justify-start items-center border-b-[#ffffff76] pb-4 text-lg font-bold tracking-wider md:text-xl lg:text-2xl">
              <span className="w-max px-4 py-1 bg-[#461169] mr-4 rounded-md">
                Message:
              </span>
              <CiWarning className="text-base md:text-lg lg:text-xl mr-2" />
              Critical Message
              <CiWarning className="text-base md:text-lg lg:text-xl ml-2" />
            </h1>
            <h1 className="w-full mt-2  text-base md:text-lg py-2 px-4 font-semibold tracking-wide text-[#ffffffdd]">
              No Favourites Found On Your LocalStorage (No Favourites Yet)
            </h1>
          </div>
        )}
        {data.length !== 0 &&
          data.map((value, index) => {
            return (
              <div
                key={"History" + index}
                className={`relative px-1 cursor-pointer md:px-4 py-2 w-full h-full  font-importantFont capitalize rounded-md  bg-[#953cd0]`}
              >
                <h1 className="absolute right-2 top-2 z-50 w-full flex justify-end items-center">
                  <FaBookmark
                    className="text-yellow-500 text-lg h-max cursor-pointer rounded-md md:text-xl lg:text-2xl bg-[#ac42f3] w-max py-1 px-4"
                    onClick={() => {
                      console.log("To Delete " + index);
                      let temp = JSON.parse(
                        localStorage.getItem("FavouritesOfDictionary")
                      );
                      temp.splice(index, 1);
                      localStorage.setItem(
                        "FavouritesOfDictionary",
                        JSON.stringify([...temp])
                      );
                      setData([
                        ...JSON.parse(
                          localStorage.getItem("FavouritesOfDictionary")
                        ),
                      ]);
                    }}
                  />
                </h1>{" "}
                <h1 className="w-full border-b-2 border-b-[#ffffff76] pb-2 text-lg my-2 font-bold tracking-wider md:text-xl lg:text-2xl">
                  <span className="w-max px-4 py-1 bg-[#461169] mr-4 rounded-md">
                    Word:
                  </span>
                  {value[0].word}
                </h1>
                <h1 className="w-full mt-2 text-base md:text-lg lg:text-xl py-2 px-4 font-semibold tracking-wide text-[#ffffffdd]">
                  {value[0].meanings[0].definitions[0].definition}
                </h1>
                <h1 className="w-full h-auto py-2 flex justify-end items-center text-sm md:text-base text-[#ffffff8b] cursor-pointer">
                  for more info click the container
                </h1>
                <div
                  className="absolute w-full h-full top-0 left-0 bg-[#0000007c] hover:bg-transparent duration-100"
                  onClick={(e) => {
                    console.log("clicked" + index);
                    setAnimation([index, e, value]);
                    let a = setTimeout(() => {
                      setLastState(true);
                      clearTimeout(a);
                      window.scrollTo(0, 0);
                    }, 400);
                    setTimeout(() => {
                      setDisplayContent(true);
                    }, 700);
                  }}
                ></div>
              </div>
            );
          })}
      </div>
      {animatoin[0] !== -1 && (
        <div
          className={`absolute ${cssClasses.randomClass} ${
            animatoin[0] !== -1
              ? lastState
                ? " " + cssClasses.nextClass
                : "  rounded-md "
              : "hidden"
          }`}
          style={{
            width: animatoin[1].target.getBoundingClientRect().width + "px",
            height: animatoin[1].target.getBoundingClientRect().height + "px",
            minHeight:
              animatoin[1].target.getBoundingClientRect().height + "px",
            left: animatoin[1].target.getBoundingClientRect().x + "px",
            top: animatoin[1].target.getBoundingClientRect().y + "px",
            background: "transparent",
            zIndex: "10",
          }}
        >
          {displayContent && (
            <div className="w-full h-screen overflow-scroll no-scrollbar">
              <h1 className="w-full h-auto px-1 md:px-4 py-2 flex flex-col justify-end items-end gap-2">
                <button
                  onClick={() => {
                    setLastState(false);
                    setTimeout(() => {
                      setAnimation([-1, [], []]);
                    }, 550);
                    setDisplayContent(false);
                  }}
                  className="w-max h-max px-4 py-2 text-xl bg-[#41195c] rounded-md"
                >
                  <CgClose />
                </button>
                <Response data={animatoin[2]} show={false} />
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SeeFavourites;
