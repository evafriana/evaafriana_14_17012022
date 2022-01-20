import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const CreateEmployee = () => {
  return (
    <>
      <Navbar />
      <section className="createEmployee">
        <h1 className="title">CREATE EMPLOYEE</h1>
        <Form />
      </section>
    </>
  );
};

export default CreateEmployee;
