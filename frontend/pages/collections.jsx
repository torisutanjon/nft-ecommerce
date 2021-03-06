//dependencies
import React from "react";
//icons
import icon from "../images/icon.png";

import UserCollectionComponent from "@/components/UserCollections/UserCollectionComponent";
import Header from "@/components/Header/Header";

export default function Collections() {
  const data_sample = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  //create an api call here to retrieve collection details from the database
  return (
    <div id="app_main_body">
      <Header title={"Collections"} />
      <UserCollectionComponent
        name={"Creator Name Here"}
        iconimg={icon}
        description={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
        ownercount={1502}
        itemcount={100}
        floorprice={1}
        pricetype={`ETH`}
        tradedcount={22000}
        // pass the retrieve data here
        datasample={data_sample}
      />
    </div>
  );
}
