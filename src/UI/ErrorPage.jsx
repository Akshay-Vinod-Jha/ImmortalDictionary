import React from "react";

const ErrorPage = (value) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full min-h-screen z-10 bg-[#000000dd]">
      <div className="w-full h-screen bg-transparent flex justify-center items-center px-2">
        <div className="w-full md:w-[70%] lg:w-[50%] h-auto px-4 py-2 rounded-xl bg-[#953cd0]">
          <h1 className="w-full flex justify-start items-center gap-2 font-extrabold tracking-widest text-lg md:text-2xl border-b-2 py-2 mb-2 border-[#ffffff90]">
            {value.titleEmoji}
            {value.title}
            {value.titleEmoji}
          </h1>
          <h1 className="w-full capitalize font-bold tracking-widest  text-base md:text-xl py-4">
            {value.description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
