//dependencies
import React from "react";
import Image from "next/image";
//styles
import MyCollectionCardStyle from "./MyCollectionCard.module.css";
export default function MyCollectionCard({
  cover,
  profilepic,
  title,
  collectionname,
}) {
  return (
    <div id={MyCollectionCardStyle.card}>
      <div id={MyCollectionCardStyle.cover}>
        <Image src={cover} layout="fill" />
      </div>
      <div id={MyCollectionCardStyle.lower_container}>
        <div id={MyCollectionCardStyle.logo_container}>
          <div id={MyCollectionCardStyle.logo_div}>
            <Image src={profilepic} layout="fill" />
          </div>
        </div>
        <div id={MyCollectionCardStyle.info_div}>
          <p id={MyCollectionCardStyle.title}>{title}</p>
          <p>{collectionname}</p>
        </div>
      </div>
    </div>
  );
}
