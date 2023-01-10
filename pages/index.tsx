import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import { App } from "../src/components";
import { inline } from "../src/styles";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#1d313a" />
        <title>ev</title>
      </Head>
      <Box sx={inline.indexContainer}>
        <App />
      </Box>
    </>
  );
}
