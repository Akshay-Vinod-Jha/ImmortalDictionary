import React, { useEffect, useRef, useState } from "react";
import EditedButton from "../UI/EditedButton";
import PartSelectionPage from "./PartSelectionPage";
import { IoArrowBack } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import EditedInputField from "../UI/EditedInputField";
import cssClasses from "./SearchWord.module.css";
import Loader from "../UI/Loader";
import Response from "./Response";
import ErrorPage from "../UI/ErrorPage";
import { CiWarning } from "react-icons/ci";
const SearchWord = (props) => {
  const wordRef = useRef();
  const [showError, setShowError] = useState(false);
  const [response, setResponse] = useState([true, false, false, []]);
  const [bookmark, setBookMark] = useState(false);

  useEffect(() => {
    localStorage.getItem("HistoryOfDicitionary") === null
      ? localStorage.setItem("HistoryOfDicitionary", JSON.stringify([]))
      : console.log("Already Available");
  }, []);
  useEffect(() => {
    localStorage.getItem("FavouritesOfDictionary") === null
      ? localStorage.setItem("FavouritesOfDictionary", JSON.stringify([]))
      : console.log("aahe");
  }, []);
  const formHandler = (value) => {
    setResponse([true, true, false, []]);
    setBookMark(false);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      .then((a) => {
        if (a.status >= 200 && a.status <= 299) {
          return a.json();
        } else {
          throw Error(a.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setResponse([false, false, true, [...data]]);
        setShowError(false);
        localStorage.setItem(
          "HistoryOfDicitionary",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("HistoryOfDicitionary")),
            [...data],
          ])
        );
      })
      .catch((error) => {
        console.log("invalid word specified");
        setResponse([true, false, false, []]);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      });
  };
  return (
    <div className="w-screen font-importantFont overflow-scroll no-scrollbar h-screen  no-scrollbar bg-[#953cd0] flex flex-col justify-start items-center">
      {showError && (
        <ErrorPage
          title="Something Went Wrong"
          titleEmoji=<CiWarning />
          description={`Failed To Find Data Related To The Specified Word....`}
        />
      )}
      <div className="w-full  h-auto px-1 lg:px-4 py-2 bg-[#953cd0]">
        <IoArrowBack
          className="text-2xl"
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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(wordRef.current.value);
            formHandler(wordRef.current.value);
          }}
          className="flex flex-col  md:flex-row mt-4 justify-center items-center gap-2"
        >
          <div className="relative w-full md:w-[50%] lg:w-[75%] h-auto grid grid-cols-1 place-content-center place-items-center">
            <EditedInputField
              className="w-full col-span-1 py-2 lg:col-span-2 text-black px-8 md:px-10 placeholder:font-bold placeholder:tracking-widest font-bold tracking-widest"
              placeholder="Enter Your Word Here"
              ref={wordRef}
            ></EditedInputField>
            <FaSearch className="absolute top-[50%] left-0 translate-x-[50%] translate-y-[-50%] font-bold text-black text-md md:text-xl" />
          </div>
          <input
            type="submit"
            value="Search Word"
            className="bg-[#591382] w-full md:w-[50%] lg:w-[25%] border-2 border-[#591382] font-bold tracking-widest font-importantFont hover:bg-[#59138297] hover:border-2 hover:border-[#ffffff68]  p-2 rounded-lg"
          />
        </form>
        <h1 className="font-bold tracking-widest py-2 md:py-4 font-importantFont">
          Try These Words...
        </h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4">
          {["Immortal", "Royal", "PaceMaker", "Arctic", "Love"].map(
            (value, index) => {
              return (
                <EditedButton
                  onClick={() => {
                    wordRef.current.value = value;
                  }}
                  key={"EditedButton" + index}
                  className="bg-[#591382] border-2 border-[#591382] hover:border-[#ffffff68] hover:bg-[#59138297] tracking-widest font-bold"
                >
                  {value}
                </EditedButton>
              );
            }
          )}
        </div>
      </div>
      <div className="relative h-auto flex flex-col w-full bg-black mt-4 py-2 px-2 rounded-t-[32px]">
        {response[0] && (
          <div className="w-full h-auto ">
            <div className="w-full h-auto p-2">
              <div
                className={
                  "h-60 border-2 border-[#ffffff49] mt-2 rounded-[24px]  " +
                  cssClasses.container
                }
              ></div>
            </div>
            <div className="w-full h-20 p-2  flex flex-col overflow-x-scroll no-scrollbar flex-wrap justify-center items-center gap-2">
              {["", "", "", "", "", "", "", "", "", ""].map((value, index) => {
                return (
                  <div
                    className={
                      "w-60 p-2 border-[#ffffff49] rounded-[24px] h-10 border-2 " +
                      cssClasses.container
                    }
                    key={"div" + index}
                  ></div>
                );
              })}
            </div>
            <div className="w-full h-auto p-2">
              <div
                className={
                  "h-60 border-2 border-[#ffffff49] mt-2 rounded-3xl " +
                  cssClasses.container
                }
              ></div>
            </div>
            {response[1] && (
              <div className="absolute top-0 left-0 rounded-3xl z-10 bg-[#000000a1] w-full h-full grid grid-cols-1 place-content-start place-items-center">
                <div className="w-full h-auto">
                  <div className="w-full flex justify-center items-center h-60">
                    <Loader></Loader>
                  </div>
                  <h1 className="w-full h-auto pt-2 flex justify-center items-center font-importantFont text-lg lg:text-2xl font-bold md:text-xl">
                    Searching For The Specified Word
                  </h1>
                  <h1 className="w-full h-auto pb-2 flex justify-center items-center font-importantFont text-lg lg:text-2xl font-bold  md:text-2xl">
                    This can Take Some Time...
                  </h1>
                </div>
              </div>
            )}
          </div>
        )}
        {response[2] && (
          <div className="w-full h-auto">
            <Response
              data={response[3]}
              bookmark={bookmark}
              setBookMark={setBookMark}
              show={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchWord;
