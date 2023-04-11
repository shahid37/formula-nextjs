import { SWRConfig } from "swr";
import React, { useEffect } from "react";

import "@/styles/globals.css";
import '../styles/fonts.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";

import UserContext from "@/context/UserContext";
import usePersistentState from "@/hooks/usePersistentState";
import { fetcher } from "@/utils/fetcher";
import initAxiosGlobalConfigs from "@/config/axiosConfig";

import localFont from '@next/font/local'

const myFont = localFont({ src: "../public/fonts/Inter-Regular.ttf" });


export default function App({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = usePersistentState("auth", {
    initialValue: {},
  });

  initAxiosGlobalConfigs(auth?.access_token);

  useEffect(() => {
    if (auth?.user && auth?.access_token) {
      // set token from local storage
      initAxiosGlobalConfigs(auth?.access_token);
    }
  }, [auth]);

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
        <main className={myFont.className}>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </main>
      </UserContext.Provider>
    </SWRConfig>
  );
}
