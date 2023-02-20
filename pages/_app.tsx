import React from "react";
import { Inter } from "@next/font/google";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

const inter = Inter({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
