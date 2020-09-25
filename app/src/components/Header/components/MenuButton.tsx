import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  switchOpened: () => void;
  opened: boolean;
}

export default ({ opened, switchOpened }: Props) => {
  const closeIconClass = opened ? "menu-icon closed" : "menu-icon";
  const openIconClas = opened ? "menu-icon" : "menu-icon closed";
  return (
    <div className="menu-button" onClick={switchOpened}>
      {!opened ? (
        <FiMenu className={openIconClas} size={30} />
      ) : (
        <FiX className={closeIconClass} size={30} />
      )}
    </div>
  );
};
