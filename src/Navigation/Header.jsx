import React from "react";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="h-[10vh] font-importantFont flex justify-start text-black items-center p-2">
      <img src={logo} alt="" className="h-14 aspect-square bg-blend-overlay" />
      <h1 className=" uppercase font-extrabold tracking-wider text-2xl text-white">
        Dictionary
      </h1>
    </div>
  );
};

export default Header;
