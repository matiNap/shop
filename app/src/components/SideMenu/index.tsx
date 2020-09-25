import React, { ReactNode } from "react";
import { FiX } from "react-icons/fi";
import "./style.scss";

interface Props {
  opened: boolean;
  children: ReactNode;
  onClose?: () => void;
}

export default ({ opened, children, onClose }: Props) => {
  const containerClass = opened ? "side-menu opened" : "side-menu";
  return (
    <div className={containerClass}>
      {onClose && (
        <div className="header">
          <FiX size={30} onClick={onClose} className="close" />
        </div>
      )}
      <ul>{children}</ul>
    </div>
  );
};
