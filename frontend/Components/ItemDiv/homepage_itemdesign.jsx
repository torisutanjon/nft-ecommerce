// dependencies
import Image from "next/image";
import React from "react";
// Subcomponents
import PesosPriceComponent from "@/components/PesosPriceComponent/PesosPriceComponent";
// styles
import homepage_itemstyle from "./homepage_itemstyle.module.css";
// icons
import etherium_icon from "@/image/Ethereum.png";
export default function Homepage_itemdesign({
  img,
  itemname,
  chaintype,
  creatorname,
  price,
}) {
  return (
    <div className={homepage_itemstyle.item_container}>
      <div className={homepage_itemstyle.item_image_div}>
        <Image
          className={homepage_itemstyle.item_image}
          src={img}
          alt="Item View Here"
          layout="fill"
        />
      </div>
      <div className={homepage_itemstyle.item_content}>
        <div className={homepage_itemstyle.top_level}>
          <p>{itemname}</p>
          <div className={homepage_itemstyle.chain_type_div}>
            <p>{chaintype}</p>
          </div>
        </div>
        <div className={homepage_itemstyle.mid_level}>
          <div className={homepage_itemstyle.creator_div}>
            <p style={{ color: "#454545" }}>by</p>
            <p className={homepage_itemstyle.creator_p}>{creatorname}</p>
          </div>
          <p style={{ alignSelf: "flex-start", color: "#454545" }}>Price</p>
        </div>
        <div className={homepage_itemstyle.low_level}>
          <Image src={etherium_icon} width={25} height={25} />
          <p className={homepage_itemstyle.price_p}>{price}</p>
          <p className={homepage_itemstyle.price_type_p}>{chaintype}</p>
        </div>
      </div>
      <div className={homepage_itemstyle.item_real_price}>
        <PesosPriceComponent />
      </div>
    </div>
  );
}
