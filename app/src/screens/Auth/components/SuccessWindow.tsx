import React from "react";
import { FiCheck } from "react-icons/fi";
import Popup from "../../../components/Popup";
import { Link } from "react-router-dom";
import { MAIN } from "../../../navRoutes";

export default () => {
  return (
    <Popup>
      <h1>Success</h1>
      <FiCheck size={80} className="success-icon" />
      <h2>Successfully created account</h2>
      <button className="success-button">
        <Link to={MAIN}>Ok</Link>
      </button>
    </Popup>
  );
};
