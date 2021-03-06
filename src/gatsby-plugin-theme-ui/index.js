import preset from "@rebass/preset";
import merge from "lodash/merge";

export default merge({}, preset, {
  breakpoints: ["599px", "600px", "900px", "1200px", "1800px"],
  colors: {
    text: "#E3BA39",
    background: "#0F0F0F",
    darkerBackground: "#0A0A0A",
    primary: "#E3BA39",
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
      fontSize: [1, 1, 1, 2, 4],
      lineHeight: 1.25,
      m: 0,
      fontWeight: 'heading',
      textAlign: 'center',
    },
    h2: {
      fontSize: [3, 2, 2, 3, 4],
      lineHeight: 1.25,
      mb: [2, 3, 3, 3, 2],
      fontWeight: 'heading',
      textAlign: 'center'
    },
    h3: {
      fontSize: [1, 1, 1, 1, 1],
      lineHeight: 1.25,
      mb: [3, 3, 3, 3, 3],
      fontWeight: 'body',
      textAlign: 'center'
    },
    p: {
      fontSize: [0, 1, 1, 1, 1],
      lineHeight: 1.45,
      mb: 3,
    },
    dl: {
      fontSize: [0, 0, 0, 0, 0],
      lineHeight: 1.45,
      mb: 3,
    },
  },
});
