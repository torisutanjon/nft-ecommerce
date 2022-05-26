//dependencies
import React from "react";
//subcomponents
import Homepage_itemdesign from "@/components/ItemDiv/homepage_itemdesign";
//icons
import item_sample from "@/image/item_sample.png";
//sty;es
import TodaysPickStyle from "./TodaysPickStyle.module.css";
export default function TodaysPick() {
  const sample_size = ["", "", "", ""];

  return (
    <div className="body">
      <div className="small_body_title" style={{ height: `15%` }}>
        <p>Today&apos;s Pick</p>
      </div>
      <div id={TodaysPickStyle.trending_body_content}>
        {sample_size.map((data, key) => {
          return (
            <div className="card" key={key}>
              <Homepage_itemdesign
                key={key}
                img={item_sample}
                itemname={"NFT Name Here"}
                chaintype={"ETH"}
                creatorname={"Creator Name Here"}
                price={1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
