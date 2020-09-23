import React from "react";
import Header from "../components/Header";

export default (HigerComponent: React.ComponentType<any>) => {
  return (props) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <HigerComponent {...props} />
      </div>
    );
  };
};
