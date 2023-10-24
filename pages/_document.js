import { Html, Head, Main, NextScript } from "next/document";
import { SideNav, Footer } from "../components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header>
          <SideNav />
        </header>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
