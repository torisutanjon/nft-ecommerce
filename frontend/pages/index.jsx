//dependencies
import Image from "next/image";
import React from "react";
//subcomponents
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MainCollection from "@/components/MainCollection/MainCollection";
import SuggestedCollection from "@/components/SuggestedCollections/SuggestedCollections";
import SuggestedCreators from "@/components/SuggestedCreators/SuggestedCreators";
import Trending from "@/components/Trending/Trending";
import TodaysPick from "@/components/TodaysPick/TodaysPick";
import NFTCategories from "@/components/NFTCategories/NFTCategories";
import GettingStarted from "@/components/GettingStarted/GettingStarted";
//icons
// styles
import IndexStyles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div id="app_main_body">
      <Header />
      <section className={IndexStyles.section} id={IndexStyles.hero_section}>
        <Hero />
      </section>

      <section
        className={IndexStyles.section}
        id={IndexStyles.alabaster_collections_section}
      >
        <MainCollection />
      </section>

      <section
        className={IndexStyles.section}
        id={IndexStyles.suggested_collections_section}
      >
        <SuggestedCollection />
      </section>

      <section
        className={IndexStyles.section}
        id={IndexStyles.suggested_creators_section}
      >
        <SuggestedCreators />
      </section>

      <section
        className={IndexStyles.section}
        id={IndexStyles.trending_section}
      >
        <Trending />
      </section>

      <section
        className={IndexStyles.section}
        id={IndexStyles.todayspick_section}
      >
        <TodaysPick />
      </section>

      <section
        className={IndexStyles.section}
        id={IndexStyles.nftcategories_section}
      >
        <NFTCategories />
      </section>

      <section className={IndexStyles.section} id="gettingstarted_section">
        <GettingStarted />
      </section>

      <section className={IndexStyles.section} id={IndexStyles.footer_section}>
        <div id={IndexStyles.footer_container}>
          <div id={IndexStyles.footer_leftside}>
            <div className={IndexStyles.footer_title}>
              <p>E-COMMERCE</p>
              <p style={{ color: `#A85F36`, marginLeft: `1%` }}>NFT</p>
            </div>
            <div className={IndexStyles.footer_middle_container}>
              <p>Made by Tristan John P. Girao</p>
            </div>
            <div className={IndexStyles.footer_bottom_container}>
              <p style={{ color: `#0a7680` }}>
                &copy; 2022 All rights reserved.
              </p>
            </div>
          </div>
          <div id={IndexStyles.footer_rightside}>
            <div id={IndexStyles.footer_contact_container}>
              <div className={IndexStyles.footer_title}>
                <p>Contact Us</p>
              </div>
              <div className={IndexStyles.footer_middle_container}>
                <button type="button" id={IndexStyles.twitter_btn}></button>
                <button type="button" id={IndexStyles.fb_btn}></button>
                <button type="button" id={IndexStyles.linked_btn}></button>
              </div>
              <div className={IndexStyles.footer_bottom_container}>
                <p>giraotristan@gmail.com</p>
              </div>
            </div>
            <div id={IndexStyles.footer_publish_container}>
              <div className={IndexStyles.footer_title}>
                <p>Publish</p>
              </div>
              <div className={IndexStyles.footer_middle_container}>
                <a href="/publish">Publish NFT</a>
              </div>
              <div className={IndexStyles.footer_bottom_container}>
                <a href="/createcollection">Create collection</a>
              </div>
            </div>
            <div id={IndexStyles.footer_community_container}>
              <div className={IndexStyles.footer_title}>
                <p>Community</p>
              </div>
              <div className={IndexStyles.footer_middle_container}>
                <button type="button" id={IndexStyles.discord_btn}></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
