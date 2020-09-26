import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return (
    <div className="route-container">
      <div className="auth-box">{children}</div>
    </div>
  );
};
