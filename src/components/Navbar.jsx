import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/employee-list">
        <p>Employee List</p>
      </Link>
    </nav>
  );
}
