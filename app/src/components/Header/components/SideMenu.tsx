import React, { ReactNode } from "react";

interface Props {
  opened: boolean;
  children: ReactNode;
}

export default ({ opened, children }: Props) => {
  const containerClass = opened ? "side-menu opened" : "side-menu";
  return <div className={containerClass}>{children}</div>;
};
