import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import CookieConsent from "react-cookie-consent";
import { DiscogsProvider } from "@/hooks/useDiscogProvider";
import MainLayout from "@/components/layouts/MainLayout";

// import "../style/global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <DiscogsProvider>
      <CSSReset />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <CookieConsent
        location="bottom"
        buttonText="I Understand"
        cookieName="myAppCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses only essential cookies to enhance the user experience.{" "}
        <span style={{ color: "#4e503b" }}>
          <a href="/cookie-policy.pdf">Learn more</a>
        </span>
      </CookieConsent>
    </DiscogsProvider>
  </ChakraProvider>
);

export default App;
