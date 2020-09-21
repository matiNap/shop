import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/material";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  const { palette } = theme;
  const { text } = palette;
  return (
    <ThemeProvider {...{ theme }}>
      <div
        style={{
          color: text.primary,
          backgroundColor: palette.secondary.main,
          minHeight: "100%",
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
