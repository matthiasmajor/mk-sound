import * as React from "react";
import { theme } from "../assets/theme";
import { GlobalStyle } from "../assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { ThemeSwitch } from "../components/ThemeSwitch/ThemeSwitch";
import ThemeContextProvider from "../context/ThemeContext";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};
