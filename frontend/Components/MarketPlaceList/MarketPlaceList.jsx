//dependencies
import React from "react";
//icons
import basti_sample from "@/image/sample_icon.png";
//subcomponents
import MarketPlaceCards from "@/components/MarketPlaceCards/MarketPlaceCards";
export default function MarketPlaceList({ sample_data }) {
  return sample_data.map((data, key) => {
    return (
      <MarketPlaceCards
        id={key}
        key={key}
        img={basti_sample}
        itemname={"Basti-Multiverse# ##"}
        chaintype={"ETH"}
        creatorname={"Alabaster Inc."}
        price={1}
        likecount={25}
      />
    );
  });
}
