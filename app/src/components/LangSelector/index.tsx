import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import Dropdown from "../Dropdown";
import "./style.scss";
import { RootState } from "../../store";
import { setLang } from "../../reducers/appReducer";
import useBreakpoints from "../../hooks/useBreakpoints";
import SideMenu from "../SideMenu";
import SideMenuItem from "../SideMenuItem";

const LANGS = [
  {
    code: "US",
    label: "United States",
  },
  {
    code: "PL",
    label: "Poland",
  },
];

export default () => {
  const [opened, setOpened] = useState(false);
  const lang = useSelector((state: RootState) => state.app.lang);
  const dispatch = useDispatch();
  const { isBigScreen } = useBreakpoints();
  return (
    <div>
      <div className="select-container">
        <div className="flag-container" onClick={() => setOpened(!opened)}>
          <ReactCountryFlag
            countryCode={lang}
            aria-label="Unied States"
            svg
            className="flag-selected"
          />
        </div>
        {isBigScreen && (
          <Dropdown opened={opened} close={() => setOpened(false)}>
            {LANGS.map(({ code, label }, index) => (
              <li
                key={code}
                onClick={() => dispatch(setLang(code))}
                className={index === 0 ? "flag-item-first" : "flag-item"}
              >
                <ReactCountryFlag
                  countryCode={code}
                  aria-label={label}
                  svg
                  className="flag"
                />
                <p className="flag-label">{code}</p>
              </li>
            ))}
          </Dropdown>
        )}
      </div>
      {!isBigScreen && (
        <SideMenu opened={opened} onClose={() => setOpened(false)}>
          {LANGS.map(({ code, label }, index) => (
            <SideMenuItem divider={index !== LANGS.length - 1}>
              <ReactCountryFlag
                countryCode={code}
                aria-label={label}
                svg
                className="flag-"
              />
              <p className="flag-label">{code}</p>
            </SideMenuItem>
          ))}
        </SideMenu>
      )}
    </div>
  );
};
