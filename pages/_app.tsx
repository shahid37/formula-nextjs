import React, { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import classNames from "classnames";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

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

  const navbarLinks = [
    {
      title: "SHOP",
      onClick: () => {},
    },
    {
      title: "BLOG",
      onClick: () => {},
    },
    {
      title: "SEARCH",
      onClick: () => {},
    },
    {
      title: "CART",
      onClick: () => {},
    },
  ];

  const useFullLinks = [
    {
      title: "About us",
      onClick: () => {},
    },
    {
      title: "History",
      onClick: () => {},
    },
    {
      title: "Contact us",
      onClick: () => {},
    },
  ];
  const contactInfo = {
    city: "Spain",
    email: " wave@bloowatch.com",
    number: "156-677-124-442-2887",
  };
  return (
    <div>
      <div
        className={classNames(
          bottomBorder
            ? "fixed border-b border-black z-[100] flex items-center justify-between xs:pl-0 lg:pl-4 2xl:pl-36 xs:pr-6 lg:pr-20 xs:h-16 lg:h-32 w-full bg-white"
            : "fixed z-[100] flex items-center justify-between xs:pl-0 lg:pl-4 2xl:pl-36 xs:pr-6 lg:pr-20 xs:h-16 lg:h-32 w-full bg-white"
        )}
      >
        <Navbar links={navbarLinks} />
      </div>
      <Component {...pageProps} />
      <footer>
        <Footer
          useFullLinks={useFullLinks}
          about="Bloowatch is specialized software for watersports schools (surfing, kitesurfing, sailing, and diving) and outdoor activity providers (skiing, climbing)"
          contactInfo={contactInfo}
        />
      </footer>
    </div>
  );
}
