import { Html, Head, Main, NextScript } from "next/document";
import { SideNav, Footer } from "../components";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative min-h-screen-nav">
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
