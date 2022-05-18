//dependencies
import Image from "next/image";
import React from "react";
//styles
import SuggestedCreatorsStyle from "./SuggestedCreatorsStyle.module.css";
export default function SuggestedCreatorsItem({
  background,
  profilepic,
  title,
  description,
}) {
  return (
    <div id={SuggestedCreatorsStyle.item_container}>
      <div id={SuggestedCreatorsStyle.background}>
        <Image src={background} layout="fill" />
      </div>
      <div id={SuggestedCreatorsStyle.lower_container}>
        <div id={SuggestedCreatorsStyle.logo}>
          <div>
            <Image src={profilepic} layout="fill" />
          </div>
        </div>
        <div id={SuggestedCreatorsStyle.info_div}>
          <div id={SuggestedCreatorsStyle.title_container}>
            <p>{title}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
