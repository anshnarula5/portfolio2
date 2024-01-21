import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function MyApp({ Component, pageProps }: AppProps) {
const NEXT_PUBLIC_GA_ID ="G-FRH6AH1D9Z"
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url : string) => {
      window.gtag('config', NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Ansh Narula</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
