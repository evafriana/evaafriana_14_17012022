import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import { Dropdown } from "dropdown-component-library";
import { string, object } from "yup";

import actions from "../store/actions";
import Datepicker from "./plugins/DatePicker";
import Modal from "./plugins/Modal";
import states from "../constants/states";
import departments from "../constants/departments";

const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  department: "",
};

const validate = {
  firstName: string().required("First Name is a required field"),
  lastName: string().required("Last Name is a required field"),
  dateOfBirth: string().required("Date of Birth is a required field"),
  startDate: string().required("Start Date is a required field"),
  street: string().required("Street is a required field"),
  city: string().required("City is a required field"),
  state: string().required("State is a required field"),
  zipcode: string().required("Zip Code is a required field"),
  department: string().required("Department is a required field"),
};

export default function EmployeeForm() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getFormatedDate = (input) => {
    const date = new Date(input);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={object().shape(validate)}
        onSubmit={(values) => {
          const result = {
            ...values,
            dateOfBirth: getFormatedDate(values?.dateOfBirth),
            startDate: getFormatedDate(values?.startDate),
          };
          dispatch(actions.createEmployee(JSON.stringify(result)));
          setShowModal(true);
        }}
      >
        {(formik) => (
          <Form className="form">
            <pre>{JSON.stringify(formik.values)}</pre>
            <div className="field__wrapper">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete={"firstName"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name="firstName">
                {(msg) => <span className="errorMessage">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="field__wrapper">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                autoComplete={"lastName"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name="lastName">
                {(msg) => <span className="errorMessage">{msg}</span>}
              </ErrorMessage>
            </div>
            <span className="field__picker">
              <div className="field__wrapper">
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <Datepicker
                  name="dateOfBirth"
                  id="dateOfBirth"
                  maxDate={new Date()}
                />
                <ErrorMessage name="dateOfBirth">
                  {(msg) => <span className="errorMessage">{msg}</span>}
                </ErrorMessage>
              </div>
              <div className="field__wrapper">
                <label htmlFor="startDate">Start Date *</label>
                <Datepicker name="startDate" id="startDate" />
                <ErrorMessage name="startDate">
                  {(msg) => <span className="errorMessage">{msg}</span>}
                </ErrorMessage>
              </div>
            </span>

            <fieldset className="address">
              <legend>Address</legend>
              <div className="address__wrapper">
                <div className="field__wrapper">
                  <label htmlFor="street">Street *</label>
                  <input
                    type="street"
                    name="street"
                    id="street"
                    autoComplete={"street"}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="street">
                    {(msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                </div>
                <div className="field__wrapper">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete={"city"}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="street">
                    {(msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                </div>
                <div className="field__wrapper">
                  <label htmlFor="state">State *</label>
                  <div className="state__wrapper">
                    <Dropdown
                      options={states}
                      onSelect={(value) => formik.setFieldValue("state", value)}
                      width="100%"
                    />
                  </div>
                  <ErrorMessage name="state">
                    {(msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                </div>
                <div className="field__wrapper">
                  <label htmlFor="zipcode">Zip Code *</label>
                  <input
                    className="zipcode__wrapper"
                    name="zipcode"
                    id="zipcode"
                    autoComplete={"zipcode"}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage name="zipcode">
                    {(msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                </div>
              </div>
            </fieldset>

            <div className="field__wrapper">
              <legend>DEPARTMENT *</legend>
              <article className="formGroup">
                <div className="formGroupItems">
                  <label htmlFor="department"></label>
                  <Dropdown
                    options={departments}
                    width="100%"
                    onSelect={(value) =>
                      formik.setFieldValue("department", value)
                    }
                  />
                  <ErrorMessage name="department">
                    {(msg) => <span className="errorMessage">{msg}</span>}
                  </ErrorMessage>
                </div>
              </article>
            </div>
            <div className="button">
              <button className="button__save" type="submit">
                SAVE
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
}
