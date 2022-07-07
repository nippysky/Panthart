import "../styles/globals.css";
import Layout from "../components/Layouts";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Panthart | Made By Afer </title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="Panthart is a community of Creative and Innovative enthusiasts, exploring endless possibilities in Afer."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:image"
            content="/images/panthart-footer-logo-dark.svg"
          />
        </Head>
        <NextNProgress
          color="#2e3192"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
