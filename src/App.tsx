import React from "react";
import Home from "./views/home";
import { ThemeProvider } from "styled-components";
import { theme } from "./app/utils/theme";
import GlobalStyle from "./utils/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
