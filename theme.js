import { extendTheme, theme as base, withDefaultColorScheme  } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
            100: 'hsla(0, 0%, 100%, 1)',
            200: 'hsla(229, 52%, 96%, 1)',
            300: 'hsla(226, 100%, 92%, 1)',
            400: 'hsla(0, 91%, 71%, 1)',
            500: 'hsla(182, 91%, 71%, 1)',
            600: 'hsla(284, 89%, 74%, 1)',
            700: 'hsla(235, 35%, 18%, 1)',
            800: 'hsla(234, 39%, 14%, 1)',
        }
    },

    fonts: {
        heading: `Roboto Slab ${base.fonts?.heading}`,
        body: `Roboto Slab ${base.fonts?.heading}`,
    },
})

export default theme;