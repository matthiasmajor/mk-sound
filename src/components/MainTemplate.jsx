import * as React from "react";
import { theme } from "../assets/theme";
import { GlobalStyle } from "../assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";
import ThemeContextProvider from "../context/ThemeContext";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
};
