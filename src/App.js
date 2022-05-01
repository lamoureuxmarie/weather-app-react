import './App.css';
import React, { useState } from "react";
import Weather from './Weather';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
import Toggle from './Toggle';
import shape1 from './images/shape1.png';
import shape2 from './images/shape2.png';

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
    <div className="App">
     <img src={shape1} alt="sunShape" className="shape1"/>
     <img src={shape2} alt="sunShape" className="shape2"/>
      <section>
    <StyledApp>
    <button className="Toggle" onClick={() => themeToggler()}><Toggle /></button>
    <h1 className="title"><em>Weather</em>App</h1>
      <Weather defaultCity="Berlin" />
    </StyledApp>
    </section>
    <footer className='float-end'>
    Open-source{" "}<a className="git-link" hRef="https://github.com/lamoureuxmarie/react-dictionary" Target="_blank" >code</a> by{" "}
    <a className="git-link" hRef="https://marielamoureux.com" Target="_blank" >Marie Lamoureux</a>
    </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
