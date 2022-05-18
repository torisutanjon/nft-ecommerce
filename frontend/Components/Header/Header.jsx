//dependencies
import React from "react";

import Head from "next/Head";

export default function Header({ keywords, description, title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
}

Header.defaultProps = {
  title: `Alabaster Tech Inc.`,
  keywords: `nft, nfts, blockchain, etherium, opensea, bitcoin, crypto, stockmarket`,
  description: `Get the trends about NFT`,
};
