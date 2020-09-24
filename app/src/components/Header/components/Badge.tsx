import React from "react";

interface Props {
  value: string | number;
}

export default ({ value }: Props) => {
  return <div className="badge">{value}</div>;
};
