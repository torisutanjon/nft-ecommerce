//dependencies
import Image from "next/image";
import React from "react";
// subcomponents
import UserCollectionCardList from "@/components/UserCollectionList/UserCollectionCardList";
//styles
import UserCollectionComponentStyle from "./CollectionsPageStyle.module.css";
export default function UserCollectionList({
  name,
  iconimg,
  description,
  ownercount,
  itemcount,
  floorprice,
  pricetype,
  tradedcount,
  datasample,
}) {
  return (
    <div id={UserCollectionComponentStyle.content}>
      <div id={UserCollectionComponentStyle.hero}>
        <div id={UserCollectionComponentStyle.logo}></div>
        <div id={UserCollectionComponentStyle.icon_container}>
          <div id={UserCollectionComponentStyle.icon_div}>
            <Image src={iconimg} width={155} height={155} />
          </div>
          <button type="button"></button>
        </div>
        <div id={UserCollectionComponentStyle.name_div}>
          <p>{name}</p>
        </div>
        <div id={UserCollectionComponentStyle.social_media_div}>
          <button
            type="button"
            id={UserCollectionComponentStyle.fb_icon}
          ></button>
          <button
            type="button"
            id={UserCollectionComponentStyle.linkedin_icon}
          ></button>
          <button
            type="button"
            id={UserCollectionComponentStyle.twitter_icon}
          ></button>
        </div>
        <div id={UserCollectionComponentStyle.description_div}>
          <p>{description}</p>
        </div>
        <div id={UserCollectionComponentStyle.stats_container}>
          <div className={UserCollectionComponentStyle.stats_divs}>
            <p className={UserCollectionComponentStyle.stats_title}>Owners</p>
            <p className={UserCollectionComponentStyle.stats_data}>
              {ownercount}
            </p>
          </div>
          <div className={UserCollectionComponentStyle.stats_divs}>
            <p className={UserCollectionComponentStyle.stats_title}>Items</p>
            <p className={UserCollectionComponentStyle.stats_data}>
              {itemcount}
            </p>
          </div>
          <div className={UserCollectionComponentStyle.stats_divs}>
            <p className={UserCollectionComponentStyle.stats_title}>
              Floor Price
            </p>
            <div id={UserCollectionComponentStyle.floor_price_container}>
              <p className={UserCollectionComponentStyle.stats_data}>
                {floorprice}
              </p>
              <p
                className={UserCollectionComponentStyle.stats_data}
                style={{ fontSize: `15px`, marginBottom: `15%` }}
              >
                {pricetype}
              </p>
            </div>
          </div>
          <div className={UserCollectionComponentStyle.stats_divs}>
            <p className={UserCollectionComponentStyle.stats_title}>
              Volume Traded
            </p>
            <p className={UserCollectionComponentStyle.stats_data}>
              {tradedcount}
            </p>
          </div>
        </div>
      </div>
      <div id={UserCollectionComponentStyle.addtolistdiv}>
        <button type="button"></button>
        &nbsp;
        <p>add to watchlist</p>
      </div>
      <div id={UserCollectionComponentStyle.filter_div}>
        <div id={UserCollectionComponentStyle.select_container}>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Status</p>
            <select>
              <option value="new">New</option>
              <option value="sale">Sale</option>
              <option value="auction">On Auction</option>
              <option value="offers">Has Offers</option>
            </select>
          </div>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Price</p>
            <select>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Chain</p>
            <select>
              <option value="new">Etherium</option>
              <option value="sale">Polygon</option>
            </select>
          </div>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Currency</p>
            <select>
              <option value="new">BNB</option>
              <option value="sale">ETH</option>
              <option value="auction">BUSD</option>
            </select>
          </div>
        </div>
        <div id={UserCollectionComponentStyle.search_bar}>
          <button type="button" title="search . . ."></button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div id={UserCollectionComponentStyle.collections_container}>
        <UserCollectionCardList data_list={datasample} />
      </div>
    </div>
  );
}
