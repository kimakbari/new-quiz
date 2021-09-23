import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { QueryClient, QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }) {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })
  const queryClient = new QueryClient()
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
