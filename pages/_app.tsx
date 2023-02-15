import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import classNames from "classnames";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [bottomBorder, setBottomBorder] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setBottomBorder(true);
      } else {
        setBottomBorder(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div>
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
    </div>
  );
}
