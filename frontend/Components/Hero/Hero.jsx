// dependencies
import React from "react";
// styles
import HeroStyle from "./HeroStyle.module.css";
// icons

export default function Hero() {
  return (
    <div id={HeroStyle.hero_container}>
      <div id={HeroStyle.left_side}>
        <p id={HeroStyle.hero_title}>NFT E-Commerce Web Application</p>
        <p id={HeroStyle.description}>
          NFT E-Commerce web application using MERN and Next JS.
        </p>
        <div id={HeroStyle.button_container}>
          <a href="/publish">Publish Now</a>
          <a href="#gettingstarted_section" id={HeroStyle.getting_started_a}>
            Getting Started?
          </a>
        </div>
      </div>
      <div id={HeroStyle.right_side}>
        <div></div>
        <div id={HeroStyle.hero_div}></div>
      </div>
    </div>
  );
}
