import { SWRConfig } from "swr";
import React from "react";
import { Inter } from "@next/font/google";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

import UserContext from "@/context/UserContext";
import usePersistentState from "@/hooks/usePersistentState";
import { fetcher } from "@/utils/fetcher";

const inter = Inter({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = usePersistentState("auth", {
    initialValue: {},
  });

  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        onError: (error, key) => {
          if (error) {
            alert(error);
          }
        },
      }}
    >
      <UserContext.Provider value={{ auth, setAuth }}>
        <main className={inter.className}>
          <Component {...pageProps} auth={auth} setAuth={setAuth} />
        </main>
      </UserContext.Provider>
    </SWRConfig>
  );
}
