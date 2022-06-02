//dependencies
import React from "react";
import Image from "next/image";
//styles
import CreatorsPageCardStyle from "./CreatorsPageCardStyle.module.css";
export default function CreatorsPageCard({
  id,
  image,
  cover,
  title,
  description,
}) {
  return (
    <div className={CreatorsPageCardStyle.card} key={id}>
      <div className={CreatorsPageCardStyle.logo_container}>
        <div>
          <Image src={image} layout="fill" alt={"alt"} />
        </div>
      </div>
      <div className={CreatorsPageCardStyle.cover}>
        <Image src={cover} layout="fill" alt={"alt"} />
      </div>
      <div className={CreatorsPageCardStyle.content}>
        <div style={{ height: `40%` }}>
          <p className={CreatorsPageCardStyle.title}>{title}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
