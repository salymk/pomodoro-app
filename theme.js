import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "hsla(0, 0%, 100%, 1)",
      200: "hsla(229, 52%, 96%, 1)",
      300: "hsla(226, 100%, 92%, 1)",
      400: "hsla(0, 91%, 71%, 1)",
      500: "hsla(182, 91%, 71%, 1)",
      600: "hsla(284, 89%, 74%, 1)",
      700: "hsla(235, 35%, 18%, 1)",
      800: "hsla(234, 39%, 14%, 1)",
    },
  },

  fonts: {
    heading: `Roboto Slab ${base.fonts?.heading}`,
    body: `Roboto Slab ${base.fonts?.heading}`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6.25rem",
    "9xl": "8rem",
  },
});

export default theme;
