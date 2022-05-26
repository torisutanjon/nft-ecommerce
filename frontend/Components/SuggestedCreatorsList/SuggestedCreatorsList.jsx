// dependencies
import React from "react";
//subcomponent
import SuggestedCreatorsItem from "@/components/SuggestedCreatorsItem/SuggestedCreatorsItem";
import item_sample from "@/image/item_sample.png";
import sample_icon from "@/image/icon.png";
export default function SuggestedCreatorsList({ datalist }) {
  return datalist.map((data, key) => {
    return (
      <SuggestedCreatorsItem
        key={key}
        background={item_sample}
        profilepic={sample_icon}
        title={"NFT Creators Name"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    );
  });
}
