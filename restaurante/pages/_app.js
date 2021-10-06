import { ChakraProvider } from "@chakra-ui/react"
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
import "styles/globals.css"
import { Box } from "@chakra-ui/react"


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100vw" height="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
export default MyApp