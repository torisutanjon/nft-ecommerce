//dependencies
import Image from "next/image";
import React, { useState } from "react";
// subcomponents
import UserCollectionCardList from "@/components/UserCollectionList/UserCollectionCardList";
import DropDownStyle from "../../styles/DropDownStyle.module.css";
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
  //dropdown states
  const [status_divh, setstatus_divh] = useState(0);
  const [status_display, setstatus_display] = useState("none");
  const [price_divh, setprice_divh] = useState(0);
  const [price_display, setprice_display] = useState("none");
  const [chain_divh, setchain_divh] = useState(0);
  const [chain_display, setchain_display] = useState("none");
  const [currency_divh, setcurrency_divh] = useState(0);
  const [currency_display, setcurrency_display] = useState("none");
  //filter states
  const [status, setStatus] = useState("New");
  const [price, setPrice] = useState("Lowest");
  const [chain, setChain] = useState("Etherium");
  const [currency, setCurrency] = useState("BNB");
  //status dropdown handler
  const status_handler = () => {
    if (status_divh === 0) {
      setstatus_divh("150px");
      setstatus_display("block");
    } else {
      setstatus_divh(0);
      setstatus_display("none");
    }
  };
  //price dropdown handler
  const pricehandler = () => {
    if (price_divh === 0) {
      setprice_divh("150px");
      setprice_display("block");
    } else {
      setprice_divh(0);
      setprice_display("none");
    }
  };
  //chain dropdown handler
  const chain_handler = () => {
    if (chain_divh === 0) {
      setchain_divh("150px");
      setchain_display("block");
    } else {
      setchain_divh(0);
      setchain_display("none");
    }
  };
  //currency dropdown handler
  const currency_handler = () => {
    if (currency_divh === 0) {
      setcurrency_divh("150px");
      setcurrency_display("block");
    } else {
      setcurrency_divh(0);
      setcurrency_display("none");
    }
  };
  return (
    <div id={UserCollectionComponentStyle.content}>
      <div id={UserCollectionComponentStyle.hero}>
        <div id={UserCollectionComponentStyle.logo}></div>
        <div id={UserCollectionComponentStyle.icon_container}>
          <div id={UserCollectionComponentStyle.icon_div}>
            <Image src={iconimg} width={155} height={155} alt={"alt"} />
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
            <div
              id={DropDownStyle.dropdown_component}
              style={{ height: `45%` }}
            >
              <input
                type="text"
                name="status"
                value={status}
                style={{ display: `none` }}
                readOnly
              />
              <div
                id={DropDownStyle.dropdown_div}
                onClick={() => status_handler()}
              >
                <p
                  id={DropDownStyle.dropdown_component_p}
                  style={{ margin: `auto` }}
                >
                  {status}
                </p>
                <div
                  id={DropDownStyle.dropdown_container}
                  style={{
                    height: status_divh,
                    display: status_display,
                  }}
                >
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setStatus("New")}
                  >
                    <p id={DropDownStyle.content_p}>New</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setStatus("Sale")}
                  >
                    <p id={DropDownStyle.content_p}>Sale</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setStatus("Auctioned")}
                  >
                    <p id={DropDownStyle.content_p}>Auctioned</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setStatus("Offered")}
                  >
                    <p id={DropDownStyle.content_p}>Offered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Price</p>
            <div
              id={DropDownStyle.dropdown_component}
              style={{ height: `45%` }}
            >
              <div
                id={DropDownStyle.dropdown_div}
                onClick={() => pricehandler()}
              >
                <p
                  id={DropDownStyle.dropdown_component_p}
                  style={{ margin: `auto` }}
                >
                  {price}
                </p>
                <div
                  id={DropDownStyle.dropdown_container}
                  style={{ height: price_divh, display: price_display }}
                >
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setPrice("Lowest")}
                  >
                    <p id={DropDownStyle.content_p}>Lowest</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setPrice("Highest")}
                  >
                    <p id={DropDownStyle.content_p}>Highest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Chain</p>
            <div
              id={DropDownStyle.dropdown_component}
              style={{ height: `45%` }}
            >
              <input
                type="text"
                name="chain"
                value={chain}
                style={{ display: `none` }}
                readOnly
              />
              <div
                id={DropDownStyle.dropdown_div}
                onClick={() => chain_handler()}
              >
                <p
                  id={DropDownStyle.dropdown_component_p}
                  style={{ margin: `auto` }}
                >
                  {chain}
                </p>
                <div
                  id={DropDownStyle.dropdown_container}
                  style={{ height: chain_divh, display: chain_display }}
                >
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setChain("Etherium")}
                  >
                    <p id={DropDownStyle.content_p}>Etherium</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setChain("Polygon")}
                  >
                    <p id={DropDownStyle.content_p}>Polygon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={UserCollectionComponentStyle.select_div}>
            <p>Currency</p>
            <div
              id={DropDownStyle.dropdown_component}
              style={{ height: `45%` }}
            >
              <input
                type="text"
                name="currency"
                value={currency}
                style={{ display: `none` }}
                readOnly
              />
              <div
                id={DropDownStyle.dropdown_div}
                onClick={() => currency_handler()}
              >
                <p
                  id={DropDownStyle.dropdown_component_p}
                  style={{ margin: `auto` }}
                >
                  {currency}
                </p>
                <div
                  id={DropDownStyle.dropdown_container}
                  style={{ height: currency_divh, display: currency_display }}
                >
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setCurrency("BNB")}
                  >
                    <p id={DropDownStyle.content_p}>BNB</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setCurrency("ETH")}
                  >
                    <p id={DropDownStyle.content_p}>ETH</p>
                  </div>
                  <div
                    className={DropDownStyle.content}
                    onClick={() => setCurrency("BUSD")}
                  >
                    <p id={DropDownStyle.content_p}>BUSD</p>
                  </div>
                </div>
              </div>
            </div>
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
