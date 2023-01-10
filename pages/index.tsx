import React from "react";
import Head from "next/head";
import { App } from "../src/components";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#1d313a" />
        <title>ev</title>
      </Head>
      <App />
    </>
  );
}
