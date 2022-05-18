// dependencies
import Image from "next/image";
import React from "react";
// Subcomponents
import PesosPriceComponent from "@/components/PesosPriceComponent/PesosPriceComponent";
// styles
import expandedItemStyle from "./ExpandedItemStyle.module.css";
// icons
import etherium_icon from "@/image/Ethereum.png";
import heart_icon from "@/image/heart-icon.png";
export default function EnpandedItem({
  img,
  itemname,
  chaintype,
  creatorname,
  price,
  likecount,
}) {
  return (
    <div className={expandedItemStyle.item_container}>
      <div className={expandedItemStyle.item_image_div}>
        <Image
          className={expandedItemStyle.item_image}
          src={img}
          alt="Item View Here"
          layout="fill"
        />
      </div>
      <div className={expandedItemStyle.item_content}>
        <div className={expandedItemStyle.top_level}>
          <p>{itemname}</p>
          <div className={expandedItemStyle.chain_type_div}>
            <p>{chaintype}</p>
          </div>
        </div>
        <div className={expandedItemStyle.mid_level}>
          <div className={expandedItemStyle.creator_div}>
            <p style={{ color: "#454545" }}>by</p>
            <p className={expandedItemStyle.creator_p}>{creatorname}</p>
          </div>
          <p style={{ alignSelf: "flex-start", color: "#454545" }}>Price</p>
        </div>
        <div className={expandedItemStyle.low_level}>
          <Image src={etherium_icon} width={25} height={25} />
          <p className={expandedItemStyle.price_p}>{price}</p>
          <p className={expandedItemStyle.price_type_p}>{chaintype}</p>
        </div>
      </div>
      <div className={expandedItemStyle.item_real_price}>
        <PesosPriceComponent />
      </div>
      <div className={expandedItemStyle.footer_div}>
        <button type="button">Buy Now</button>
        <div className={expandedItemStyle.likecount_div}>
          <div>
            <Image src={heart_icon} layout="fill" />
          </div>
          <p>{likecount}</p>
        </div>
      </div>
    </div>
  );
}
