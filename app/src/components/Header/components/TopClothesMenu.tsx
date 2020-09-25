import React from "react";
import { Link, useHistory } from "react-router-dom";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { MEN_HOME } from "../../../navRoutes";

const MENS_MENU = [
  {
    title: "New arrivals",
    to: "",
  },
  {
    title: "Pants",
    to: "",
  },
  {
    title: "T-shirts",
    to: "",
  },
  {
    title: "Jackets",
    to: "",
  },
  {
    title: "Shoes",
    to: "",
  },
  {
    title: "Accessories",
    to: "",
  },
];
const WOMENS_MENU = [
  {
    title: "New arrivals",
    to: "",
  },
  {
    title: "Pants",
    to: "",
  },
  {
    title: "T-shirts",
    to: "",
  },
  {
    title: "Jackets",
    to: "",
  },
  {
    title: "Shoes",
    to: "",
  },
  {
    title: "Accessories",
    to: "",
  },
];

export default () => {
  const {
    location: { pathname },
  } = useHistory();
  const data = pathname === MEN_HOME ? MENS_MENU : WOMENS_MENU;
  const { isBigScreen } = useBreakpoints();
  if (isBigScreen) {
    return (
      <ul className="menu">
        {data.map(({ title, to }, index) => (
          <li key={title}>
            <Link to={to}>{title}</Link>
            {index < data.length - 1 && <div className="menu-space" />}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};
