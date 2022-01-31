import React from "react";
import Datepicker from "./plugins/DatePicker";
import DropDown from "./plugins/Dropdown";
import Modal from "./plugins/Modal";

export default function Form() {
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field__wrapper">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" autoComplete={"firstName"} />
        </div>
        <div className="field__wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input type="lastName" id="lastName" autoComplete={"lastName"} />
        </div>
        <span className="field__picker">
          <div className="field__wrapper">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <Datepicker maxDate={new Date()} />
          </div>
          <div className="field__wrapper">
            <label htmlFor="startDate">Start Date</label>
            <Datepicker />
          </div>
        </span>

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
              <div className="state__wrapper">
                <DropDown inputName="state" />
              </div>
            </div>
            <div className="field__wrapper">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                className="zipcode__wrapper"
                id="zip-code"
                autoComplete={"zip-code"}
              />
            </div>
          </div>
        </fieldset>

        <div className="field__wrapper">
          <legend>DEPARTMENT</legend>
          <article className="formGroup">
            <div className="formGroupItems">
              <label htmlFor="department"></label>
              <DropDown inputName="department" width="100%" />
            </div>
          </article>
        </div>
        <span className="errorMessage">"error"</span>
        <div className="button">
          <button className="button__save" type="submit">
            save
          </button>
        </div>
      </form>

      <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
}
