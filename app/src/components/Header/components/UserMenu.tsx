import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import LangSelector from "../../LangSelector";
import AccountMenu from "./AccountMenu";
import Badge from "./Badge";

interface Props {
  isMainPage: boolean;
}

export default ({ isMainPage }: Props) => {
  const signedIn = true;
  return (
    <div className="user-menu">
      {!isMainPage && (
        <>
          <Link to="cart" className="cart">
            <FiShoppingCart size={25} />
            <Badge value={2} />
          </Link>
          <div>
            {signedIn ? (
              <AccountMenu />
            ) : (
              <Link to="loginPage">
                <p className="login">Login</p>
              </Link>
            )}
          </div>
        </>
      )}
      <div className="select-flag">
        <LangSelector />
      </div>
    </div>
  );
};
