import React from "react";
import Select from "react-select";

const DropDown = (props) => {
  return (
    <Select
      aria-label={props.inputName}
      aria-haspopup="listbox"
      className="custom-select"
      classNamePrefix="custom-select"
    />
  );
};

export default DropDown;
