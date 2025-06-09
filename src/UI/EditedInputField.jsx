import React, { forwardRef } from "react";

const EditedInputField = forwardRef((value, ref) => {
  return (
    <input
      type="text"
      name="EditedInputField"
      id="EditedInputField"
      required={value.required}
      autoFocus={value.autoFocus}
      className={" border-none outline-none rounded-md  " + value.className}
      ref={ref}
      placeholder={value.placeholder}
    />
  );
});

export default EditedInputField;
