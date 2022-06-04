//dependencies
import React from "react";
//subcomponent
import ArtCollectionCard from "../ArtCollectionCard/ArtCollectionCard";

import cover from "@/image/nft.gif";
import profilepic from "@/image/user_icon.png";

export default function ArtCollectionList({ datalist }) {
  return datalist.map((data, key) => {
    return (
      <ArtCollectionCard
        key={key}
        cover={cover}
        profilepic={profilepic}
        title={"Lorem Ipsum"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    );
  });
}
