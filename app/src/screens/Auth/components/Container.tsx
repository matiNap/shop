import React, { ReactNode } from "react";
import Title from "./Title";

interface Props {
  children: ReactNode;
  title: string;
}

export default ({ children, title }: Props) => {
  return (
    <div className="sign-up-container">
      <Title title={title} />
      <div className="auth-box">{children}</div>
    </div>
  );
};
