//dependencies
import React from "react";
//subcomponent
import MyCollectionCard from "@/components/MyCollectionsCard/MyCollectionCard";

import cover from "../../images/alabaster-collections-hero.gif";
import profilepic from "../../images/basti_sample.png";

export default function MyCollectionList({ datalist }) {
  return datalist.map((data, key) => {
    return (
      <MyCollectionCard
        key={key}
        cover={cover}
        profilepic={profilepic}
        title={"Lorem Ipsum"}
        collectionname={"Collection Name"}
      />
    );
  });
}
