import Theme from "./theme.d";

const breakpoints = ["578px", "768px", "1024px"];

const theme: Theme = {
  breakpoints,
  colors: {
    text: "#212529",
    background: "#fff",
    primary: "#00f",
    secondary: "#00a",
    highlight: "#ededff",
    accent: "#c0f",
    gray: "#eee",
    lightgray: "#fafafa",
    midgray: "#777",
    modes: {
      dark: {
        text: "#f0f4f6",
        background: "#040d14",
        primary: "#2FBEFF",
        secondary: "#f0e",
        gray: "#222",
        lightgray: "#111",
        highlight: "#001119",
      },
      gray: {
        text: "#eef",
        background: "#333336",
        primary: "#2FBEFF",
        secondary: "#0bf",
        gray: "#55555a",
        lightgray: "#444448",
        highlight: "#33444c",
      },
      rose: {
        text: "#0e172c",
        background: "#fec7d7",
        primary: "#8841ff",
        secondary: "#0bf",
        gray: "#a786df",
        lightgray: "#444448",
        highlight: "#33444c",
      },
      chocolate: {
        text: "#fff3ec",
        background: "#55423d",
        primary: "#e78fb3",
        secondary: "#306",
        gray: "#271c19",
        lightgray: "#444448",
        highlight: "#33444c",
      },
      teal: {
        text: "#abd1c6",
        background: "#004643",
        primary: "#f9bc60",
        secondary: "#306",
        gray: "#271c19",
        lightgray: "#444448",
        highlight: "#33444c",
      },
    },
  },
  fonts: {
    body: "Merriweather, serif",
    header: "Open Sans, sans-serif",
    monospace: "Meno, monospace",
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  mediaQueries: {
    small: `@media (min-width: ${breakpoints[0]})`,
    medium: `@media (min-width: ${breakpoints[1]})`,
    large: `@media (min-width: ${breakpoints[2]})`,
  },
  sizes: {
    avatar: "128px",
    maxWidth: "768px",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  zIndices: [-1, 0, 1, 2],
};

export default theme;
