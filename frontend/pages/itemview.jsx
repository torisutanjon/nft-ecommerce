//dependencies
import React from "react";
import Image from "next/image";
//subcomponent
import Header from "@/components/Header/Header";
//styles
import ItemViewStyle from "../styles/ItemViewStyle.module.css";

//this is just for simuation all data must get from rest api
//response
import basti_image from "@/image/basti_sample.png";

//these variable are just for emulation
//data must be passed from parent component where this page was triggered to be called
const itemname = "Lorem ipsum #001";
const creatorname = "Lorem";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const cryptoprice = "1";
const chaintype = "ETH";
const equivalentprice = "2,668.78";
const n_owners = "100";
const n_likes = "22";
const itemimage = basti_image;

export default function ItemView() {
  return (
    <div id={ItemViewStyle.body}>
      <Header title={"Item View"} />
      <div id={ItemViewStyle.left_side}>
        <p>{itemname}</p>
        <div id={ItemViewStyle.info_div}>
          <div id={ItemViewStyle.creatorname_div}>
            <p>by</p>
            <p id={ItemViewStyle.creatorname_p}>{creatorname}</p>
          </div>
          <p style={{ marginTop: `2.5%` }}>{description}</p>
          <p style={{ marginTop: `15%`, color: `#454545`, fontSize: `16px` }}>
            Price
          </p>
          <div id={ItemViewStyle.price_div}>
            <p style={{ fontSize: `29px` }}>
              {cryptoprice}
              {chaintype}
            </p>
            <p style={{ fontSize: `17px`, marginLeft: `1.5%` }}>
              = {equivalentprice}
            </p>
          </div>
          <button type="button" id={ItemViewStyle.buy_btn}>
            Buy Now
          </button>
          <button type="button" id={ItemViewStyle.offer_btn}>
            Make offer
          </button>
        </div>
      </div>
      <div id={ItemViewStyle.right_side}>
        <div id={ItemViewStyle.image_div}>
          <Image src={basti_image} layout="fill" />
        </div>
        <div id={ItemViewStyle.stats_div}>
          <div id={ItemViewStyle.owners_div}>
            <button type=""></button>
            <p>{n_owners}</p>
            <p>Owners</p>
          </div>
          <div id={ItemViewStyle.likes_div}>
            <button type=""></button>
            <p>{n_likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
