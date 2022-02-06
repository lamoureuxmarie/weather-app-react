import './App.css';
import React, { useState } from "react";
import Weather from './Weather';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
import Toggle from './Toggle';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState(() => false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
    <StyledApp>
    <div className="App">
    <button onClick={() => themeToggler()}><Toggle /></button>
      <Weather defaultCity="Berlin" />
    </div>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
