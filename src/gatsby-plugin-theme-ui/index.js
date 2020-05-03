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
    "0.422rem",
    "0.563rem",
    "0.75rem",
    "1.777rem",
    "2.369rem",
    "3.157rem",
    "4.209rem",
  ],
  fontWeights: {
    body: 400,
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
      fontSize: [4, 2, 3, 4, 7],
      lineHeight: 1.25,
      mb: 4,
    },
    p: {
      fontSize: [3, 2, 3, 4, 7],
      lineHeight: 1.45,
      mb: 3,
    },
  },
});
