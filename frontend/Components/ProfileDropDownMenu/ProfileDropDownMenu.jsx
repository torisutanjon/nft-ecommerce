//icons
import profile_dropdown_icon from "@/image/profile_icon.png";
import favorites_dropdown_icon from "@/image/favorites-icon.png";
import watchlist_dropdown_icon from "@/image/watchlist-icon.png";
import collection_dropdown_icon from "@/image/collection-icon.png";
import settings_dropdown_icon from "@/image/setting-icon.png";
import logout_dropdown_icon from "@/image/logout-icon.png";
// dependencies
import React, { useState } from "react";
import Image from "next/image";
import { removeCookies } from "cookies-next";
// styles
import TopNavStyles from "../TopNav/TopNav.module.css";
export default function ProfileDropDownMenu() {
  // states
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [contentVisibility, setContentVisibility] = useState("hidden");

  const dropdown_handler = () => {
    if (dropdownHeight === 0) {
      setDropdownHeight("200px");
      setContentVisibility("visible");
    } else {
      setDropdownHeight(0);
      setContentVisibility("hidden");
    }
  };

  return (
    <div id={TopNavStyles.user_icon_container}>
      <button type="button" onClick={() => dropdown_handler()}>
        {/* use usericon prop here as image src */}
        {/* <Image id="user_icon" src={sample_user} layout="fill" /> */}
      </button>
      <div
        id={TopNavStyles.dropdown_container}
        style={{ height: `${dropdownHeight}` }}
      >
        <div
          className={TopNavStyles.dropdown_content}
          style={{ visibility: `${contentVisibility}` }}
          onClick={() => (location.href = "/profile")}
        >
          <div className={TopNavStyles.content_img}>
            <Image
              src={profile_dropdown_icon}
              height={20}
              width={20}
              alt={"some iamge"}
            />
          </div>
          <div className={TopNavStyles.content_p}>
            <p>Profile</p>
          </div>
        </div>
        <div
          className={TopNavStyles.dropdown_content}
          style={{ visibility: `${contentVisibility}` }}
          onClick={() => (location.href = "/favorites")}
        >
          <div className={TopNavStyles.content_img}>
            <Image src={favorites_dropdown_icon} height={20} width={20} />
          </div>
          <div className={TopNavStyles.content_p}>
            <p>Favorites</p>
          </div>
        </div>
        <div
          className={TopNavStyles.dropdown_content}
          style={{ visibility: `${contentVisibility}` }}
          onClick={() => (location.href = "/watchlist")}
        >
          <div className={TopNavStyles.content_img}>
            <Image src={watchlist_dropdown_icon} height={20} width={20} />
          </div>
          <div className={TopNavStyles.content_p}>
            <p>Watchlist</p>
          </div>
        </div>
        <div
          className={TopNavStyles.dropdown_content}
          style={{ visibility: `${contentVisibility}` }}
          onClick={() => (location.href = "/mycollections")}
        >
          <div className={TopNavStyles.content_img}>
            <Image src={collection_dropdown_icon} height={20} width={20} />
          </div>
          <div className={TopNavStyles.content_p}>
            <p>My Collections</p>
          </div>
        </div>
        <div
          className={TopNavStyles.dropdown_content}
          style={{ visibility: `${contentVisibility}` }}
          onClick={() => (location.href = "/usersettings")}
        >
          <div className={TopNavStyles.content_img}>
            <Image src={settings_dropdown_icon} height={20} width={20} />
          </div>
          <div className={TopNavStyles.content_p}>
            <p>Settings</p>
          </div>
        </div>
        <div
          className={TopNavStyles.dropdown_content}
          style={{ visibility: `${contentVisibility}` }}
          onClick={() => {
            removeCookies("token"), (window.location.href = "/");
          }}
        >
          <div className={TopNavStyles.content_img}>
            <Image src={logout_dropdown_icon} height={20} width={20} />
          </div>
          <div className={TopNavStyles.content_p}>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
