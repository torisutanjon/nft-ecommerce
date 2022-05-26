// dependencies
import React from "react";
// icons
import item_sample from "@/image/item_sample.png";
// subcomponent
import Homepage_itemdesign from "@/components/ItemDiv/homepage_itemdesign";

export default function AlabasterCollections() {
  const sample_size = ["", "", "", "", "", "", "", ""];

  return (
    <div className="body">
      <div className="big_body_title">
        <p>Main Collection</p>
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
      <div className="big_body_link_footer">
        {/* <Link href="/collections"> */}
        <a href="/collections">Scout More In My Collections!</a>
        {/* </Link> */}
      </div>
    </div>
  );
}
