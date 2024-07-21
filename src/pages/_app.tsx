import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import CookieConsent from "react-cookie-consent";
import { DiscogsProvider } from "@/hooks/useDiscogProvider";
import MainLayout from "@/components/layouts/MainLayout";

const theme = extendTheme({
  styles: {
    global: {
      // Global styles for a consistent look
      body: {
        color: 'gray.800',
        bg: 'gray.50',
      }
    }
  }
});

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <DiscogsProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <CookieConsent
        location="bottom"
        buttonText="I Understand"
        cookieName="myAppCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#4A5568" }}
        expires={150}
      >
        This website uses only essential cookies to enhance the user experience.{" "}
        <a href="/cookie-policy.pdf" style={{ color: "#CBD5E0" }}>Learn more</a>
      </CookieConsent>
    </DiscogsProvider>
  </ChakraProvider>
);

export default App;
