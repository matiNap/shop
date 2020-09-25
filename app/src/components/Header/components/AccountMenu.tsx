import React, { useState } from "react";
import { FiArchive, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MAIN, ORDERS, PROFILE } from "../../../navRoutes";
import Dropdown from "../../Dropdown";
import useBreakpoints from "../../../hooks/useBreakpoints";
import SideMenu from "./SideMenu";

export default () => {
  const [opened, setOpened] = useState(false);
  const { isBigScreen } = useBreakpoints();
  return (
    <div>
      <div className="account-menu-container">
        <FiUser
          className="user"
          size={25}
          onClick={() => {
            setOpened(!opened);
          }}
        />
        {isBigScreen && (
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
        )}
      </div>
      {!isBigScreen && (
        <SideMenu opened={opened}>
          <div>user</div>
        </SideMenu>
      )}
    </div>
  );
};
