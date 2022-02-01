import React from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import { ImCross } from "react-icons/im";

export default function Modal({ showModal, handleCloseModal }) {
  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          inset: "24rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        },
      }}
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
      ariaHideApp={false}
    >
      <span
        className="cross"
        onClick={handleCloseModal}
        style={{
          alignSelf: "end",
          fontSize: "1.5rem",
          paddingRight: "2rem",
          cursor: "pointer",
        }}
      >
        <ImCross className="iconCross" />
      </span>
      <div className="employeeCreated">
        <h3>Employee Created!</h3>
        <FcApproval className="iconCheck" />
      </div>

      <Link
        to="/employee-list"
        style={{
          cursor: "pointer",
          color: "#c49589",
        }}
      >
        <span type="button">Go to Employee List...</span>
      </Link>
    </ReactModal>
  );
}
