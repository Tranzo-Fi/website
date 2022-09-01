import React from "react";
import Home from "./views/home";
import { ThemeProvider } from "styled-components";
import { theme } from "./app/utils/theme";
import GlobalStyle from "./utils/globalStyle";
import ReactGA from "react-ga";

ReactGA.initialize("UA-239748385-1");
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
