import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useBreakpoints from "../../hooks/useBreakpoints";
import { MAIN, MEN_HOME, WOMEN_HOME } from "../../navRoutes";
import Logo from "../Logo";
import MenuButton from "./components/MenuButton";
import SideMenu from "./components/SideMenu";
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
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

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
              <MenuButton
                opened={sideMenuOpened}
                switchOpened={() => setSideMenuOpened(!sideMenuOpened)}
              />
            )}
          </div>
        )}
        <div className="nav">
          <Logo />
          {menuVisible && <TopClothesMenu />}
        </div>
        <UserMenu isMainPage={!menuVisible} />
      </div>
      {isSmallScreen && (
        <MenuButton
          opened={sideMenuOpened}
          switchOpened={() => setSideMenuOpened(!sideMenuOpened)}
        />
      )}
      {!isBigScreen && (
        <SideMenu opened={sideMenuOpened}>
          <div>test</div>
        </SideMenu>
      )}
    </header>
  );
};
