import React from "react";
import { FiMenu } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import useBreakpoints from "../../hooks/useBreakpoints";
import { MAIN, MEN_HOME, WOMEN_HOME } from "../../navRoutes";
import Logo from "../Logo";
import MenuButton from "./components/MenuButton";
import TopClothesMenu from "./components/TopClothesMenu";
import Type from "./components/Type";
import UserMenu from "./components/UserMenu";
import "./style.scss";

export default () => {
  const {
    location: { pathname },
  } = useHistory();
  const menuVisible = pathname !== MAIN;
  const { isBigScreen, isMediumScreen, isSmallScreen } = useBreakpoints();

  return (
    <header>
      <div className="header-container">
        {(isBigScreen || isMediumScreen) && (
          <div>
            {isBigScreen ? (
              <>
                <Type typeName="Women" path={WOMEN_HOME} />
                <Type typeName="Men" path={MEN_HOME} />
              </>
            ) : (
              <MenuButton />
            )}
          </div>
        )}
        <div className="nav">
          <Logo />
          {menuVisible && <TopClothesMenu />}
        </div>
        <UserMenu isMainPage={!menuVisible} />
      </div>
      {isSmallScreen && <FiMenu />}
    </header>
  );
};
