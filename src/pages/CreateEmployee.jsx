import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const CreateEmployee = () => {
  return (
    <section>
      <Navbar />
      <article className="createEmployee">
        <h1 className="title">CREATE EMPLOYEE</h1>
        <Form />
      </article>
    </section>
  );
};

export default CreateEmployee;
