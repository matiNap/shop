import React from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {
  path: string;
  typeName: string;
}

export default ({ path, typeName }: Props) => {
  const {
    location: { pathname },
  } = useHistory();
  const selected = pathname === path;
  return (
    <Link to={path} className={selected ? "selected" : ""}>
      {typeName}
    </Link>
  );
};
