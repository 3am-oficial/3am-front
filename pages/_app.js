import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/utils/authContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>3AM Official</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthProvider>
  );
}
