//dependencies
import React from "react";
import Image from "next/image";
import Link from "next/link";
// icons
import plus_icon from "@/image/plus_icon.png";
//subcomponent
import MyCollectionsList from "@/components/MyCollectionLists/MyCollectionsList";
import Header from "@/components/Header/Header";
//styles
import MyCollectionsStyles from "../styles/MyCollectionsStyles.module.css";

const sample_data = [
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
  "",
];

//create api call here to retrieve user collection list from the database

export default function MyCollections() {
  return (
    <div id={MyCollectionsStyles.body}>
      <Header title={"My Collections"} />
      <div id={MyCollectionsStyles.topnav}>
        <div id={MyCollectionsStyles.title_container}>
          <p>My Collections</p>
        </div>
        <div id={MyCollectionsStyles.add_btn_container}>
          <Link href="#">
            <a>
              <div id={MyCollectionsStyles.add_btn}>
                <div id={MyCollectionsStyles.plus_icon_container}>
                  <Image src={plus_icon} layout="fill" />
                </div>
                <p>add collection</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div id={MyCollectionsStyles.content}>
        {/* passed retrieved data here */}
        <MyCollectionsList datalist={sample_data} />
      </div>
      <div id={MyCollectionsStyles.footer}></div>
    </div>
  );
}
