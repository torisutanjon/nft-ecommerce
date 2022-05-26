// dependencies;
import React from "react";
//icons
import nft_icon from "@/image/nft_icon.png";
//subcomponents
import UserCollectionCard from "@/components/UserCollectionCard/UserCollectionCard";

export default function UserCollectionList({ data_list }) {
  return data_list.map((data, key) => {
    return (
      <UserCollectionCard
        id={key}
        key={key}
        img={nft_icon}
        itemname={"Basti-Multiverse# ##"}
        chaintype={"ETH"}
        creatorname={"Alabaster Inc."}
        price={1}
        likecount={25}
      />
    );
  });
}
