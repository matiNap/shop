import React from "react";

interface Props {
  children: string;
}

export default ({ children }: Props) => (
  <p className="auth-error">{children}</p>
);
