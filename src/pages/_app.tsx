import "@/styles/globals.css";
import "@/styles/nprogress.css";

import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";

import nProgress from "nprogress";

import { ChakraProvider } from "@chakra-ui/react";

import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Philip Edekobi(luxury.dev)</title>
        <meta
          name="description"
          content="Philip Edekobi's personal website and blog"
        />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
