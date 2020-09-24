import React from "react";
import { Link } from "react-router-dom";
import { MAIN } from "../../navRoutes";
import "./style.scss";

export default () => {
  return (
    <Link to={MAIN} className="logo">
      <h1>ShopLogo</h1>
    </Link>
  );
};
