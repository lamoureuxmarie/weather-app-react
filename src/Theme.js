import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  app: "#FFBF01",
  fontColor: "#181818",
  body: "#fff",
};

export const darkTheme = {
  app: "#004ED5",
  fontColor: "#FAFAFA",
  body: "#181818",
};

export const GlobalStyles = createGlobalStyle`
	.App {
		background-color: ${(props) => props.theme.app};
    transition: all 0.25s linear;
	}
  body {
    background-color: ${(props) => props.theme.body};
  }


`;