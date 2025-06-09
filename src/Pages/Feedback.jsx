import React, { useRef, useState } from "react";
import feddbackImage from "../images/feedbackImage.png";
import EditedInputField from "../UI/EditedInputField";
import EditedInputArea from "../UI/EditedInputArea";
import ErrorPage from "../UI/ErrorPage";
import { CiWarning } from "react-icons/ci";
import { FaHandsPraying } from "react-icons/fa6";
import EditedButton from "../UI/EditedButton";
import PartSelectionPage from "./PartSelectionPage";
import Back from "../UI/Back";
const Feedback = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form Submitted");
    if (
      nameRef.current.value.trim() === "" ||
      feedBackRef.current.value.trim() === ""
    ) {
      console.log("Improper Message");
      setFormError([true, true]);
      setTimeout(() => {
        setFormError([false, true]);
      }, 2000);
    } else {
      console.log(nameRef.current.value + "  " + feedBackRef.current.value);
      console.log("proper message");
      setFormError([true, false]);
      setTimeout(() => {
        setFormError([false, false]);
      }, 2000);
    }
  };
  const nameRef = useRef();
  const feedBackRef = useRef();
  const [formError, setFormError] = useState([false, false]);
  return (
    <div className="w-screen pb-4 md:pb-0 md:overflow-hidden overflow-scroll h-screen font-importantFont flex flex-col justify-start items-center no-scrollbar">
      {formError[0] && (
        <ErrorPage
          title={
            !formError[1] ? "FeedBack Confirmation" : "Something Went Wrong"
          }
          titleEmoji={!formError[1] ? <FaHandsPraying /> : <CiWarning />}
          description={
            !formError[1]
              ? `Thanks!! "${nameRef.current.value}" For Your Valuable Feedback For Our Dicitonary Application.. Hope You Enjoy It.`
              : `Oops!! "${nameRef.current.value}" It Feels Like You Did Something That Violates The Form Validation Rule... Please Provide Appropriate Name & Feedback.`
          }
        />
      )}
      <div className="w-full font-importantFont  h-auto md:overflow-hidden md:h-full bg-[#953cd0] flex flex-col md:flex-row md:justify-starts md:items-start lg:flex-row justify-center items-center">
        <div className="w-full h-auto md:h-full pt-2 flex flex-col justify-center items-start">
          <Back
            setToDisplayCorrespondingFunction={
              props.setToDisplayCorrespondingFunction
            }
          />
          <img
            src={feddbackImage}
            alt=""
            className="h-78 aspect-[1.4/1] p-0 object-cover"
          />
        </div>
        <form
          className="w-full font-importantFont  md:justify-center md:items-center md:rounded-t-none md:rounded-l-3xl h-auto md:h-full bg-black rounded-t-3xl flex flex-col pt-6 px-2 justify-center items-center overflow-scroll no-scrollbar"
          onSubmit={submitHandler}
        >
          <h1 className="pl-2 text-xl text-[#ffffffe7]  w-full text-start font-importantFont font-extrabold tracking-widest">
            Provide Your Valuable FeedBack...
          </h1>
          <h1 className="w-full pl-2 mt-2 font-bold tracking-wider text-base text-[#ffffffa5]">
            Enter Your Name
          </h1>
          <EditedInputField
            placeholder="Type Your Full Name Here"
            ref={nameRef}
            required={true}
            autoFocus={true}
            className=" mt-1 ml-2 w-[97%] focus:bg-[#e3c6f6] bg-[#c891ed] placeholder:text-black text-black font-bold tracking-wider p-1"
          />
          <h1 className="w-full pl-2 mt-4 font-bold tracking-wider text-base text-[#ffffffa5]">
            Enter FeedBack Here
          </h1>
          <EditedInputArea
            placeholder="Type Your FeedBack Here..."
            ref={feedBackRef}
            required={true}
            className=" mt-1 ml-2 w-[97%] focus:bg-[#e3c6f6] placeholder:text-black h-40 text-black font-bold tracking-wider p-1"
          />
          <input
            type="submit"
            value="Submit Feedback"
            className="w-[97%] p-2 bg-[#953cd0] font-importantFont hover:bg-[#953cd06a] text-lg tracking-wider mt-4 rounded-md ml-2"
          />
          <div className="w-[97%] ml-2">
            <EditedButton
              className=" bg-[#953cd0] capitalize text-white hover:bg-[#953cd06a] text-lg tracking-wider mt-4 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                props.setToDisplayCorrespondingFunction(
                  <PartSelectionPage
                    setToDisplayCorrespondingFunction={
                      props.setToDisplayCorrespondingFunction
                    }
                  />
                );
              }}
            >
              Return Home
            </EditedButton>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default Feedback;
