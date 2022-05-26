// dependencies
import React from "react";
// icons
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
