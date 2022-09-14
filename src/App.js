import './App.css';
import React, { useState } from "react";
import Weather from './Weather';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
import Toggle from './Toggle';
import shape1 from './images/shape1.png';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState(() => false);

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (

    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
    <div className="App shadow-sm">
      <section>
    <StyledApp>
    <div className="Toggle" onClick={() => themeToggler()}><Toggle /></div>
    <h1 className="title">Weather App</h1>
      <Weather defaultCity="Berlin" />
    </StyledApp>
    </section>
    <footer className='float-end'>
    Open-source{" "}<a className="git-link" href="https://lamoureux-react-weather-app.netlify.app" target="_blank" >code</a> by{" "}
    <a className="git-link" href="https://marielamoureux.com" target="_blank" >Marie Lamoureux</a>
    </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
