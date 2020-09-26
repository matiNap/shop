import React from "react";
import { FiCheck } from "react-icons/fi";
import history from "../../../history";
import { MAIN } from "../../../navRoutes";

export default () => {
  return (
    <div className="auth-success-window">
      <div className="success-box">
        <h1>Success</h1>
        <FiCheck size={80} className="success-icon" />
        <h2>Successfully created account</h2>
        <button className="success-button" onClick={() => history.push(MAIN)}>
          Ok
        </button>
      </div>
    </div>
  );
};
