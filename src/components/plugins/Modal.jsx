import React from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

export default function Modal({ showModal, handleCloseModal }) {
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
      ariaHideApp={false}
    >
      <button onClick={handleCloseModal}>Close Modal</button>
      <h3>The employee has been registered !</h3>
      <Link to="/employee-list" className="buttonLink">
        <button type="button" className="buttonDefault">
          Go to the list
        </button>
      </Link>
    </ReactModal>
  );
}
