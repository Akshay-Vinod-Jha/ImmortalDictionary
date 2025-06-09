import React, { forwardRef } from "react";

const EditedInputArea = forwardRef((value, ref) => {
  return (
    <textarea
      name="EditedInputArea"
      required={value.required}
      id="EditedInputArea"
      className={
        " border-none outline-none rounded-md resize-none bg-[#c891ed] " +
        value.className
      }
      ref={ref}
      placeholder={value.placeholder}
    ></textarea>
  );
});

export default EditedInputArea;
