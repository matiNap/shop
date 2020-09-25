import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import Dropdown from "../Dropdown";
import "./style.scss";
import { RootState } from "../../store";
import { setLang } from "../../reducers/appReducer";
import useBreakpoints from "../../hooks/useBreakpoints";
import SideMenu from "../Header/components/SideMenu";

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
            className="flag"
          />
        </div>
        {isBigScreen && (
          <Dropdown opened={opened} close={() => setOpened(false)}>
            {LANGS.map(({ code, label }) => (
              <li key={code} onClick={() => dispatch(setLang(code))}>
                <ReactCountryFlag
                  countryCode={code}
                  aria-label={label}
                  svg
                  className="flag"
                />
                <p>{code}</p>
              </li>
            ))}
          </Dropdown>
        )}
      </div>
      {!isBigScreen && <SideMenu opened={opened}>Select lang</SideMenu>}
    </div>
  );
};
