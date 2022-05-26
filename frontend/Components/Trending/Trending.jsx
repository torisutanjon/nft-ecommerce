//dependencies
import React from "react";
// subcomponent
import Homepage_itemdesign from "@/components/ItemDiv/homepage_itemdesign";
// icons
import item_sample from "@/image/item_sample.png";

export default function Trending() {
  const sample_size = ["", "", "", "", "", "", "", ""];

  return (
    <div className="body">
      <div className="big_body_title">
        <p>Trending</p>
      </div>
      <div className="big_body_content">
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
