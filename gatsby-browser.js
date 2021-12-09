import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStateProvider from "./src/store/GlobalStateProvider";
import { theme } from "./src/theme/theme";

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  </GlobalStateProvider>
)