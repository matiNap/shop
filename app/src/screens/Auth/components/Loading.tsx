import { CircularProgress } from "@material-ui/core";
import React from "react";

export default () => {
  return (
    <div className="auth-loading-container">
      <CircularProgress />
    </div>
  );
};
