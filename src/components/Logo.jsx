import React from "react";
import logo from "../assets/img/logoNavbar.jpg";

export default function Logo() {
  return (
    <img
      className="logo__navbar"
      src={logo}
      alt="HR Net"
      width={"100px"}
      height={"100px"}
    />
  );
}
