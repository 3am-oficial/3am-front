import Head from "next/head";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/utils/authContext";
import { SideNav, Footer, Deploy } from "@/components";
import "react-toastify/dist/ReactToastify.css";
import "react-h5-audio-player/lib/styles.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>3AM Official</title>
      </Head>

      <SideNav />
      <div className="flex flex-col items-center justify-center min-h-screen-nav w-full text-center">
        <iframe
          className="scale-[1.5] lg:scale-[3] mt-20"
          src="https://lottie.host/embed/bbadc499-93c1-4fc8-99fe-f4e2ba6776e2/4DKa2loqpV.json"
        ></iframe>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-20 lg:mt-36">
          Sitio en construcción
        </h1>
      </div>
      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}
