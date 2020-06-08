const breakpoints = ["578px", "768px", "1024px"];

const theme = {
  breakpoints,
  colors: {
    text: "#000",
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
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#f0e",
        gray: "#222",
        lightgray: "#111",
        highlight: "#001119",
      },
      gray: {
        text: "#eef",
        background: "#333336",
        primary: "#09f",
        secondary: "#0bf",
        gray: "#55555a",
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
};

export default theme;
