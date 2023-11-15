import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/utils/authContext";
import { SideNav, Footer, Deploy } from "@/components";
import "react-toastify/dist/ReactToastify.css";
import "react-h5-audio-player/lib/styles.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // const targetDate = new Date("2023-12-01T00:00:00").getTime();
  const targetDate = new Date("2023-11-06T12:39:00").getTime();
  const [deploy, setDeploy] = useState(targetDate - new Date().getTime() < 0);
  const router = useRouter();

  return (
    <AuthProvider>
      <Head>
        <title>3AM Official</title>
      </Head>

      {deploy ? (
        <>
          <SideNav />
          <Component {...pageProps} />
          <Footer />
          <ToastContainer />
        </>
      ) : (
        <Deploy targetDate={targetDate} setDeploy={setDeploy} />
      )}
    </AuthProvider>
  );
}
