import React from "react";

export default (HigerComponent: React.ComponentType<any>) => {
  return (props) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <HigerComponent {...props} />
      </div>
    );
  };
};
