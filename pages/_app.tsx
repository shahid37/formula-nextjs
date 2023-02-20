import React, { useEffect, useState } from "react";
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
      <div
        className={classNames(
          bottomBorder
            ? "fixed border-b border-black z-[100] w-full flex justify-between items-center bg-off-white"
            : "fixed z-[100] w-full flex justify-between items-center bg-off-white"
        )}
      >
        <Navbar />
      </div>
      <Component {...pageProps} />
    </main>
  );
}
