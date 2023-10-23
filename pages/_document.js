import { Html, Head, Main, NextScript } from "next/document";
import { SideNav, Footer } from "../components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header>
          <h1 className="text-center border-b border-b-stone-600">
            3AM Official
          </h1>
          <SideNav />
        </header>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
