// dependencies
import Image from "next/image";
import React from "react";
//subcomponents
import ExpandedItemDesign from "@/components/ExpandedItem/ExpandedItemDesign";
export default function MarketPlaceCards({
  id,
  img,
  itemname,
  chaintype,
  creatorname,
  price,
  likecount,
}) {
  return (
    <ExpandedItemDesign
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
