import React, { useState } from "react";
import { FiArchive, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MAIN, ORDERS, PROFILE } from "../../../navRoutes";
import Dropdown from "../../Dropdown";
import useBreakpoints from "../../../hooks/useBreakpoints";
import SideMenu from "../../SideMenu";
import SideMenuItem from "../../SideMenuItem";

export default () => {
  const [opened, setOpened] = useState(false);
  const { isBigScreen } = useBreakpoints();
  return (
    <div className="account-menu-container">
      <div className="account-menu">
        <FiUser
          className="user"
          size={25}
          onClick={() => {
            setOpened(!opened);
          }}
        />
        {isBigScreen && (
          <Dropdown opened={opened} close={() => setOpened(false)}>
            <li className="dropdown-item" style={{ marginTop: 0 }}>
              <FiUser size={20} className="icon" />
              <Link to={PROFILE} className="label">
                Profile
              </Link>
            </li>
            <li className="dropdown-item">
              <FiArchive size={20} className="icon" />
              <Link to={ORDERS} className="label">
                Orders
              </Link>
            </li>
            <div className="divider"></div>
            <li className="dropdown-item">
              <Link to={MAIN} className="label">
                Sign out
              </Link>
            </li>
          </Dropdown>
        )}
      </div>
      {!isBigScreen && (
        <SideMenu opened={opened} onClose={() => setOpened(false)}>
          <SideMenuItem divider>
            <FiUser size={20} className="icon" />
            <Link to={PROFILE} className="label">
              Profile
            </Link>
          </SideMenuItem>
          <SideMenuItem divider>
            <FiArchive size={20} className="icon" />
            <Link to={ORDERS} className="label">
              Orders
            </Link>
          </SideMenuItem>
          <SideMenuItem>
            <Link to={MAIN} className="label" style={{ fontWeight: "bold" }}>
              Sign out
            </Link>
          </SideMenuItem>
        </SideMenu>
      )}
    </div>
  );
};
