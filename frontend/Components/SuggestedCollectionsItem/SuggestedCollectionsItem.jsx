//dependencies
import Image from "next/image";
import React from "react";

//styles
import SuggestedCollectionsItemStyle from "./SuggestedCollectionsItemStyle.module.css";

export default function SuggestedCollectionsItem({
  background,
  profilepic,
  category,
  title,
  collectionname,
  description,
}) {
  return (
    <div id={SuggestedCollectionsItemStyle.card}>
      <div id={SuggestedCollectionsItemStyle.background}>
        <Image src={background} layout="fill" />
      </div>
      <div id={SuggestedCollectionsItemStyle.lower_container}>
        <div id={SuggestedCollectionsItemStyle.logo_container}>
          <div id={SuggestedCollectionsItemStyle.category}>
            <p>{category}</p>
          </div>
          <div id={SuggestedCollectionsItemStyle.logo}>
            <Image src={profilepic} layout="fill" />
          </div>
        </div>
        <div id={SuggestedCollectionsItemStyle.info_div}>
          <div id={SuggestedCollectionsItemStyle.title_container}>
            <p>{title}</p>
          </div>
          <p>{collectionname}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
