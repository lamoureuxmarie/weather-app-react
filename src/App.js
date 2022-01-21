import React from "react";
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="Container">

      <Weather defaultCity="Berlin" />

     <footer>This project was coded by{" "} 
     <a href="https://www.marielamoureux.com/" target="_blank">Marie Lamoureux</a>
     {" "}and is{" "}
     <a href="https://github.com/lamoureuxmarie/weather-app-react" target="_blank">
      open-sourced
     </a>
     </footer>

     </div>
    </div>
  );
}

export default App;
