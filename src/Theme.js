import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FAFAFA",
  fontColor: "#181818",
  image: "https://images.unsplash.com/photo-1608657803991-b62ca5de7a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
};

export const darkTheme = {
  body: "#012938",
  fontColor: "#FAFAFA",
  image: "https://images.unsplash.com/photo-1516166328576-82e16a127024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
};

export const GlobalStyles = createGlobalStyle`
	.App {
		background-color: ${(props) => props.theme.body};
    transition: all 0.25s linear;
	}
  body {
    background-image: url(${(props) => props.theme.image});
  }


`;