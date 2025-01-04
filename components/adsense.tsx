import Script from "next/script";
import React from "react";

type AdsenseTypes = {
  publisherId: string;
};

export default function AdSense({ publisherId }: AdsenseTypes) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
