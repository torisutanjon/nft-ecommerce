//dependencies
import React from "react";
//subcomponent
import MyCollectionCard from "@/components/MyCollectionsCard/MyCollectionCard";

import cover from "../../images/nft.gif";
import profilepic from "../../images/user_icon.png";

export default function MyCollectionList({ datalist }) {
  return datalist.map((data, key) => {
    return (
      <MyCollectionCard
        key={key}
        cover={cover}
        profilepic={profilepic}
        title={"Collection Name Here"}
        collectionname={"Collection Name"}
      />
    );
  });
}
