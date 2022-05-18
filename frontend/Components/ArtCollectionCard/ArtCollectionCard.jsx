//dependencies
import React from "react";
import Image from "next/image";
//subcomponent
import ArtCollectionCardStyle from "./ArtCollectionCardStyle.module.css";

export default function ArtCollectionCard({
  cover,
  profilepic,
  title,
  description,
}) {
  return (
    <div id={ArtCollectionCardStyle.card}>
      <div id={ArtCollectionCardStyle.cover_container}>
        <Image src={cover} layout="fill" />
      </div>
      <div id={ArtCollectionCardStyle.lower_container}>
        <div id={ArtCollectionCardStyle.logo_container}>
          <div id={ArtCollectionCardStyle.logo_div}>
            <Image src={profilepic} layout="fill" />
          </div>
        </div>
        <div id={ArtCollectionCardStyle.info_div}>
          <p id={ArtCollectionCardStyle.title}>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
