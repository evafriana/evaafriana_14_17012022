import React from "react";
import DropDown from "./Dropdown";

export default function Form() {
  return (
    <form className="form">
      <div className="field__wrapper">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" autoComplete={"firstName"} />
      </div>
      <div className="field__wrapper">
        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" id="lastName" autoComplete={"lastName"} />
      </div>
      <div className="field__wrapper">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="dateOfBirth"
          id="dateOfBirth"
          autoComplete={"dateOfBirth"}
        />
      </div>
      <div className="field__wrapper">
        <label htmlFor="startDate">Start Date</label>
        <input type="startDate" id="startDate" autoComplete={"startDate"} />
      </div>
      <fieldset className="address">
        <legend>Address</legend>
        <div className="address__wrapper">
          <div className="field__wrapper">
            <label htmlFor="street">Street</label>
            <input type="street" id="street" autoComplete={"street"} />
          </div>
          <div className="field__wrapper">
            <label htmlFor="city">City</label>
            <input type="text" id="city" autoComplete={"city"} />
          </div>
          <div className="field__wrapper">
            <label htmlFor="state">State</label>
            <DropDown inputName="state" />
          </div>
          <div className="field__wrapper">
            <label htmlFor="zip-code">Zip Code</label>
            <input type="number" id="zip-code" autoComplete={"zip-code"} />
          </div>
        </div>
      </fieldset>

      <div className="field__wrapper">
        <legend>DEPARTMENT</legend>
        <article className="formGroup">
          <div className="formGroupItems">
            <label htmlFor="department"></label>
            <DropDown inputName="department" />
          </div>
        </article>
      </div>

      <div className="button">
        <button className="button__save" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
