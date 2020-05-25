import { AppProps } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import Header from "../containers/Header";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  // Other globals
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
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  body {
    margin: 0;
    font-family: "Merriweather", serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    margin-top: 0;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.color.accent.two};
    margin: ${({ theme }) => theme.spacing.gutter} 0;
  }

  img {
    width: 100%;
  }

  small {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  color: {
    accent: {
      one: "#fafafa",
      two: "#eaeaea",
      three: "#999",
      four: "#888",
      five: "#666",
      six: "#444",
      seven: "#333",
      eight: "#111",
    },
    background: "#fff",
    foreground: "#000",
    primary: "#0070f3",
  },
  maxWidth: "768px",
  spacing: {
    gutter: "2em",
  },
};

const LayoutContainer = styled.main`
  color: ${({ theme }) => theme.color.foreground};

  .Layout__page-container {
    font-size: 18px;
    line-height: 1.5;
    padding: ${({ theme }) => theme.spacing.gutter};
    -webkit-overflow-scrolling: touch;

    > * {
      margin: auto;
      max-width: ${({ theme }) => theme.maxWidth};

      h1 span {
        font-family: "Pacifico";
        display: inline-block;
        padding-right: 5px;
      }
    }
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Michael Yuen's Personal Website</title>
        <link
          href="https://fonts.googleapis.com/css?family=Gaegu|Open+Sans:400,700|Pacifico|Merriweather&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <section className="Layout__page-container">
          <Component {...pageProps} />
        </section>
      </LayoutContainer>
    </ThemeProvider>
  );
}
