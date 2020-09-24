import React, { useState } from "react";
import { FiArchive, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MAIN, ORDERS, PROFILE } from "../../../navRoutes";
import Dropdown from "../../Dropdown";

export default () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="account-menu-container">
      <FiUser
        className="user"
        size={25}
        onClick={() => {
          setOpened(!opened);
        }}
      />
      <Dropdown opened={opened} close={() => setOpened(false)}>
        <li>
          <FiUser size={20} className="icon" />
          <Link to={PROFILE}>Profile</Link>
        </li>
        <li>
          <FiArchive size={20} className="icon" />
          <Link to={ORDERS}>Orders</Link>
        </li>
        <div className="divider"></div>
        <li>
          <Link to={MAIN}>Sign out</Link>
        </li>
      </Dropdown>
    </div>
  );
};
