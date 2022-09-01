import React from "react";
import Home from "./views/home";
import { ThemeProvider } from "styled-components";
import { theme } from "./app/utils/theme";
import GlobalStyle from "./utils/globalStyle";
import ReactGA from "react-ga";

ReactGA.initialize("G-7DK957Q1KS");
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
