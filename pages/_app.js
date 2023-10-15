import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>3AM Official</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
