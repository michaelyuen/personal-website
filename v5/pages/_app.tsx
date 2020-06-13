import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { color, layout, space, typography } from "styled-system";
import ColorModeButton from "../components/ColorModeButton";
import Header from "../containers/Header";
import GlobalStyle from "../styles/GlobalStyle";
import baseTheme from "../styles/theme";

const LayoutContainer = styled.main`
  ${layout};
  ${space};
  -webkit-overflow-scrolling: touch;

  > * {
    h1 span {
      font-family: "Pacifico";
      display: inline-block;
      padding-right: 5px;
    }
  }
`;

const modes = ["light", "dark", "gray", "rose", "chocolate", "teal"];
const getTheme = (mode) => ({
  ...baseTheme,
  colors: baseTheme.colors.modes[mode] || baseTheme.colors,
});

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(modes[0]);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql.matches) {
      return setMode("dark");
    } else {
      return setMode("light");
    }
  }, []);
  const setNextMode = () => {
    let nextModeIndex = modes.indexOf(mode) + 1;
    if (nextModeIndex >= modes.length) {
      nextModeIndex = 0;
    }
    setMode(modes[nextModeIndex]);
  };
  const theme = getTheme(mode);

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
      <ColorModeButton mode={mode} setMode={setNextMode} />
      <Header />
      <LayoutContainer maxWidth="maxWidth" mx="auto" p="4">
        <Component {...pageProps} />
      </LayoutContainer>
    </ThemeProvider>
  );
}
