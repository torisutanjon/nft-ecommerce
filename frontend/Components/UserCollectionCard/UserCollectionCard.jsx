// dependencies
import Image from "next/image";
import React from "react";
// icons
import heart_icon from "@/image/heart-icon.png";
//subcomponents
import EnpandedItem from "@/components/ExpandedItem/ExpandedItemDesign";
export default function UserCollectionCard({
  id,
  img,
  itemname,
  chaintype,
  creatorname,
  price,
  likecount,
}) {
  return (
    <EnpandedItem
      key={id}
      img={img}
      itemname={itemname}
      chaintype={chaintype}
      creatorname={creatorname}
      price={price}
      likecount={likecount}
    />
  );
}
