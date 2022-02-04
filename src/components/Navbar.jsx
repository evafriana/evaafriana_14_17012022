import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const { pathname } = useLocation();

  const employeeListPage = pathname === "/employee-list";

  return (
    <nav className="navbar ">
      <Link to="/">
        <Logo />
      </Link>

      <h1 className="hrnet">HRNet</h1>

      {employeeListPage ? (
        <Link to="/">
          <p>Create Employee</p>
        </Link>
      ) : (
        <Link to="/employee-list">
          <p>Employee List</p>
        </Link>
      )}
    </nav>
  );
}
