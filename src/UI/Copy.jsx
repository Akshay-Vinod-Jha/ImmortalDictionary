import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const Copy = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full flex justify-end items-center">
      <button
        className="w-max h-max  text-lg md:text-xl px-4 py-2 bg-black rounded-md"
        onClick={() => {
          navigator.clipboard.writeText(props.toCopy).then(() => {
            alert("Copied To Clipboard Successfully");
          });
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 1500);
        }}
      >
        {!clicked ? (
          <MdOutlineContentCopy />
        ) : (
          <IoMdDoneAll className="text-green-500" />
        )}
      </button>
    </div>
  );
};

export default Copy;
