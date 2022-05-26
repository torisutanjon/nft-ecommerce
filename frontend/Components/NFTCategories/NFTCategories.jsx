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
          <div>
            <p>Art</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Card</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Collectibles</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Music</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Photography</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Sports</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Utility</p>
          </div>
        </div>
        <div className={NFTCategoryStyle.category_container}>
          <div>
            <p>Virtual World</p>
          </div>
        </div>
      </div>
    </div>
  );
}
