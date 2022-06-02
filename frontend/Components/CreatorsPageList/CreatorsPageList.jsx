//dependencies
import React from "react";
//subcomponent
import CreatorsPageCard from "../CreatorsPageCard/CreatorsPageCard";

import logo from "@/image/icon.png";
import cover from "@/image/creators_cover.png";

export default function CreatorsPageList({ datalist }) {
  return datalist.map((data, key) => {
    return (
      <CreatorsPageCard
        key={key}
        id={key}
        image={logo}
        cover={cover}
        title={"Lorem Ipsum"}
        description={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
    `}
      />
    );
  });
}
