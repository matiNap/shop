import React from "react";

interface Props {
  children: string;
}

export default ({ children }: Props) => {
  return <button className="auth-button">{children}</button>;
};
