import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Link className="currentEmployee" to="/">
        <p>Current Employees</p>
      </Link>
    </nav>
  );
}
