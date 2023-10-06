import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Tour Guide</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}