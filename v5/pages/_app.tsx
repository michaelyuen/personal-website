import { AppProps } from "next/app";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import { color, layout, space, typography } from "styled-system";
import Header from "../containers/Header";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

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
      <Header />
      <LayoutContainer maxWidth="maxWidth" mx="auto" p="4">
        <Component {...pageProps} />
      </LayoutContainer>
    </ThemeProvider>
  );
}
