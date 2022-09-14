import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  app: "#f1f1f1",
  fontColor: "#181818",
  body: "#fff",
  canvas: "none",
  location: "#576490",
  locationhover: "#4a5a8c",
};

export const darkTheme = {
  app: "#6a6a6a",
  fontColor: "#fff",
  body: "#181818",
  canvas: "brightness(180)",
  location: "#576490",
  locationhover: "#4a5a8c",
  unit: "#D1D2F9",
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

  .WeatherInfo .units a {
    color: ${(props) => props.theme.unit};
  }
`;
