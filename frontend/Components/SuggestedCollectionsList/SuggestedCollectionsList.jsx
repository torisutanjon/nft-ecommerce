//dependencies
import React from "react";
//subcomponent
import SuggestedCollectionsItem from "@/components/SuggestedCollectionsItem/SuggestedCollectionsItem";
import item_sample from "@/image/item_sample.png";
import sample_icon from "@/image/icon.png";
export default function SuggestedCollectionsList({ datalist }) {
  return datalist.map((data, key) => {
    return (
      <SuggestedCollectionsItem
        key={key}
        background={item_sample}
        profilepic={sample_icon}
        title={"Basti MultiVerse"}
        category={"Virtual Worlds"}
        collectionname={"The Collection Name"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    );
  });
}
