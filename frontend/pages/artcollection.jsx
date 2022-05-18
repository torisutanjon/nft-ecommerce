//dependencies
import React from "react";
//subcomponent
import ArtCollectionList from "@/components/ArtCollectionList/ArtCollectionList";
import Header from "@/components/Header/Header";
//styles
import ArtCollectionsStyle from "../styles/ArtCollectionsStyle.module.css";

export default function ArtColletion() {
  //just a sample data to emulate number of data returns from the database
  const sample_data = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  //create the database api call here to retrieve art collection from the database

  return (
    <div id={ArtCollectionsStyle.body}>
      <Header title={"Art Collection"} />
      <div id={ArtCollectionsStyle.topnav}>
        <div id={ArtCollectionsStyle.title_container}>
          <p id={ArtCollectionsStyle.title}>ART COLLECTIONS</p>
        </div>
        <div id={ArtCollectionsStyle.topnav_content}>
          <div id={ArtCollectionsStyle.filters_container}>
            <div id={ArtCollectionsStyle.filter_div}>
              <p>Status</p>
              <select>
                <option value="new">New</option>
                <option value="sale">Sale</option>
                <option value="auction">On Auction</option>
                <option value="offer">Has Offers</option>
              </select>
            </div>
            <div id={ArtCollectionsStyle.filter_div}>
              <p>Chain</p>
              <select>
                <option value="etherium">Etherium</option>
                <option value="polygon">Polygon</option>
              </select>
            </div>
            <div id={ArtCollectionsStyle.filter_div}>
              <p>Currency</p>
              <select>
                <option value="bnb">BNB</option>
                <option value="eth">ETH</option>
                <option value="busd">BUSD</option>
              </select>
            </div>
          </div>
          <div id={ArtCollectionsStyle.search_bar}>
            <button type="button" title="search . . ."></button>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div id={ArtCollectionsStyle.content}>
        {/* pass the array of objects data retrieve from the database */}
        <ArtCollectionList datalist={sample_data} />
      </div>
    </div>
  );
}
