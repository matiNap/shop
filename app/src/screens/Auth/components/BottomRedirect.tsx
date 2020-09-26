import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  to: string;
}

export default ({ text, to }: Props) => {
  return (
    <Link to={to} className="auth-bottom-info">
      {text}
    </Link>
  );
};
