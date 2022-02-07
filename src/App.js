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
    <div className="App">
      <section>
    <StyledApp>
    
    <button className="Toggle" onClick={() => themeToggler()}><Toggle /></button>
      <Weather defaultCity="Berlin" />
   
    </StyledApp>
    </section>
    </div>
    </ThemeProvider>
  );
}

export default App;
