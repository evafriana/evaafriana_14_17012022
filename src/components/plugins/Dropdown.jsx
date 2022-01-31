import React from "react";
import { Dropdown } from "dropdown-component-library";

const DropDown = (width) => {
  const myData = ["Paris", "Nantes", "Toulouse"];
  return <Dropdown options={myData} width={width} />;
};

export default DropDown;
