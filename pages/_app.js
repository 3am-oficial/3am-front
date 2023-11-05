import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/utils/authContext";
import { SideNav, Footer, Deploy } from "@/components";

export default function App({ Component, pageProps }) {
  // const targetDate = new Date("2023-12-01T00:00:00").getTime();
  const targetDate = new Date("2023-11-05T01:48:00").getTime();

  const validationDeploy = () => targetDate - new Date().getTime() < 0;
  return (
    <AuthProvider>
      <Head>
        <title>3AM Official</title>
      </Head>

      {validationDeploy() ? (
        <>
          <SideNav />
          <Component {...pageProps} />
          <Footer />
          <ToastContainer />
        </>
      ) : (
        <Deploy targetDate={targetDate} />
      )}
    </AuthProvider>
  );
}
