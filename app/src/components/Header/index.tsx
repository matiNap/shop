import React from "react";
import Type from "./components/Type";
import "./style.scss";

export default () => {
  return (
    <header className="header-container">
      <div>
        <Type typeName="Women" path="women-home" />
        <Type typeName="Men" path="men-home" />
      </div>
    </header>
  );
};
