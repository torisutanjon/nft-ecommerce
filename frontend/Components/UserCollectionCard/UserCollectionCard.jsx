// dependencies
import React from "react";
// icons
//subcomponents
import ExpandedItem from "@/components/ExpandedItem/ExpandedItemDesign";
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
    <ExpandedItem
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
