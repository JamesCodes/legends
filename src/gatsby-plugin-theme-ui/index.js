import preset from "@rebass/preset";
import merge from "lodash/merge";

export default merge({}, preset, {
  breakpoints: ["599px", "600px", "900px", "1200px", "1800px"],
  colors: {
    text: "#E3BA39",
    background: "#0F0F0F",
    primary: "#639",
    secondary: "#ff6347",
  },
  fonts: {
    body: "Butler, system-ui, sans-serif",
    heading: "Butler, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    "1.25rem",
    "2rem",
    "2.5rem",
    "3.125rem",
    "3.90625rem",
    "4.88281rem",
    "6.10352rem",
  ],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  layout: {
    container: {
      maxWidth: 1440,
      px: [4, 4, 5, 5, 5],
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    h1: {
      fontSize: [2, 2, 2, 4, 4],
      lineHeight: 1.25,
      m: 0,
      fontWeight: 'heading',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: [2, 2, 2, 3, 4],
      lineHeight: 1.25,
      mb: [3, 3, 3, 3, 4],
      fontWeight: 'heading'
    },
    p: {
      fontSize: [0, 1, 1, 1, 2],
      lineHeight: 1.45,
      mb: 3,
    },
  },
});
