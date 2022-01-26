import React from "react";
import Navbar from "../components/Navbar";

const CurrentEmployee = () => {
  return (
    <section>
      <Navbar />
      <article className="currentEmployee">
        <h1 className="title">CURRENT EMPLOYEE</h1>
        <span className="lineForm" />
      </article>
    </section>
  );
};

export default CurrentEmployee;
