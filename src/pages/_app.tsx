import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { Provider as NextAuthProvider } from "next-auth/client";
import { StatesProvider } from "../hooks/useState";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <StatesProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </StatesProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
