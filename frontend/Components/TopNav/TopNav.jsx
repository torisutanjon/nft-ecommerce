// dependencies
import React, { useState, useEffect } from "react";
import Image from "next/image";
import jwt from "jsonwebtoken";
// icons
import ewallet_icon from "@/image/ewallet_icon.png";
// styles
import TopNavStyles from "./TopNav.module.css";
//subcomponents
import ProfileDropDownMenu from "@/components/ProfileDropDownMenu/ProfileDropDownMenu";

export default function TopNav({ loogedIn }) {
  //ifuser is not signed in
  const signin = () => {
    return <a href="/signin">Sign In</a>;
  };
  //if a user has signed in
  const user_icon = (/*{usericon}*/) => {
    return <ProfileDropDownMenu />;
  };

  return (
    <div id={TopNavStyles.top_nav_container}>
      <div id={TopNavStyles.top_left_side}>
        <a href="/">
          <div id={TopNavStyles.main_logo_container}>
            <div id={TopNavStyles.main_icon}>
              {/* <Image src={alabaster_icon} layout="fill" /> */}
            </div>
            <p id={TopNavStyles.labaster_p}>E-COMMERCE</p>
            <p id={TopNavStyles.nft_p}>NFT</p>
          </div>
        </a>
      </div>
      <div id={TopNavStyles.search_bar}>
        <button type="button" title="search . . ."></button>
        <input type="text" placeholder="Search" />
      </div>
      <div id={TopNavStyles.top_nav_right_side}>
        <a href="/publish">Publish</a>
        <a href="/marketplace">Marketplace</a>
        {loogedIn === true ? user_icon() : signin()}
        <a href="#" id={TopNavStyles.wallet_container}>
          <Image src={ewallet_icon} layout="fill" />
        </a>
      </div>
    </div>
  );
}
