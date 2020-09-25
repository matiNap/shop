import React, { ReactNode } from "react";
import "./style.scss";

interface Props {
  children: ReactNode;
  divider?: boolean;
}

export default ({ children, divider }: Props) => {
  return (
    <li className="side-menu-item-container">
      <div className="side-menu-item">{children}</div>
      {divider && <div className="side-menu-divider" />}
    </li>
  );
};
