import React from "react";

const EditedButton = (props) => {
  return (
    <button
      className={props.className + " p-2 w-full rounded-md font-importantFont"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default EditedButton;
