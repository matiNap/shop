import React from "react";
import { useHistory } from "react-router-dom";
import { MAIN, MEN_HOME, WOMEN_HOME } from "../../navRoutes";
import Logo from "../Logo";
import Menu from "./components/Menu";
import Type from "./components/Type";
import UserMenu from "./components/UserMenu";
import "./style.scss";

export default () => {
  const {
    location: { pathname },
  } = useHistory();
  const menuVisible = pathname !== MAIN;
  return (
    <header className="header-container">
      <div>
        <Type typeName="Women" path={WOMEN_HOME} />
        <Type typeName="Men" path={MEN_HOME} />
      </div>
      <div className="nav">
        <Logo />
        {menuVisible && <Menu />}
      </div>
      <UserMenu isMainPage={!menuVisible} />
    </header>
  );
};
