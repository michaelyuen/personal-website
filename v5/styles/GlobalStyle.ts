import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
    min-height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes[3]}px;
    line-height: ${theme.lineHeights.body};
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.header};
    font-weight: bold;
    margin-top: 0;
  }

  h1 {
    font-size: ${theme.fontSizes[5]}px;
  }

  hr {
    border: none;
  }

  img {
    width: 100%;
  }

  /* TODO: get rid of this */
  small {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
