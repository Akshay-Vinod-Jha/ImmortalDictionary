import React from "react";
import cssClasses from "./loader.module.css";
const Loader = () => {
  return (
    <>
      <div className={cssClasses["lds-spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
