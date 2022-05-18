//dependencies
import React from "react";
import GettingStartedStyle from "./GettingStartedStyle.module.css";

export default function GettingStarted() {
  return (
    <div id={GettingStartedStyle.body}>
      <div id={GettingStartedStyle.title}>
        <p>Getting Started?</p>
      </div>
      <div id={GettingStartedStyle.content}>
        <div className={GettingStartedStyle.inner_div}>
          <div className={GettingStartedStyle.hero}></div>
          <div className={GettingStartedStyle.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={GettingStartedStyle.inner_div}>
          <div className={GettingStartedStyle.hero}></div>
          <div className={GettingStartedStyle.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={GettingStartedStyle.inner_div}>
          <div className={GettingStartedStyle.hero}></div>
          <div className={GettingStartedStyle.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
