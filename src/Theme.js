import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#181818",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	.App {
		background-color: ${(props) => props.theme.body};
    transition: all 0.25s linear;
	}
`;