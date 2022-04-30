import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  app: "#FFBF01",
  fontColor: "#181818",
  body: "#fff",
  canvas: "none",
  location: "#173A2D",
  locationhover: "#122b22",
};

export const darkTheme = {
  app: "#004ED5",
  fontColor: "#fff",
  body: "#181818",
  canvas: "brightness(180)",
  location: "#73C9EA",
  locationhover: "#73C9DA",
};

export const GlobalStyles = createGlobalStyle`
	.App {
		background-color: ${(props) => props.theme.app};
    transition: all 0.25s linear;
	}
  body {
    background-color: ${(props) => props.theme.body};
  }
  .Weather canvas {
    filter: ${(props) => props.theme.canvas};
  }

  .Weather .current-location-button {
    background-color: ${(props) => props.theme.location};
  }

  .Weather .current-location-button:hover {
    background-color: ${(props) => props.theme.locationhover};
  }
  

`;