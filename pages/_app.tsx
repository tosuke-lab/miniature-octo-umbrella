import React from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
