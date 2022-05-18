// dependencies
import Image from "next/image";
import React from "react";
// styles
import NFTCategoryStyle from "./NFTCategoryStyle.module.css";
// icons

export default function NFTCategories() {
  return (
    <div className="body">
      <div id={NFTCategoryStyle.nft_categories_title}>
        <p>NFT Categories</p>
      </div>
      <div id={NFTCategoryStyle.nft_categories_content}>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={artbg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={cardbg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={collectiblesbg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={musicbg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={photographybg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={sportsbg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={utilitybg} layout="fill" priority /> */}
        </div>
        <div className={NFTCategoryStyle.category_container}>
          {/* <Image src={virtualworldbg} layout="fill" priority /> */}
        </div>
      </div>
    </div>
  );
}
