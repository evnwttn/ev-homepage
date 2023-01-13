import React from "react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <>
      <Image
        src="../img/ao.png"
        alt="AO"
        width="1920"
        height="1992"
        style={{ height: "100%", width: "auto" }}
      />
      <Image
        src="../img/ptk.png"
        alt="AO"
        width="1920"
        height="1068"
        style={{ height: "100%", width: "auto" }}
      />
      <Image
        src="../img/tfu.png"
        alt="TFU"
        width="1920"
        height="1068"
        style={{ height: "100%", width: "auto" }}
      />
    </>
  );
};
