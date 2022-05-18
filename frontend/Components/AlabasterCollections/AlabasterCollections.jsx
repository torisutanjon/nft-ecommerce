// dependencies
import Link from "next/link";
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
        <p>Alabaster Collections</p>
      </div>
      <div className="big_body_content">
        {sample_size.map((data, key) => {
          return (
            <div className="card" key={key}>
              <Homepage_itemdesign
                key={key}
                img={item_sample}
                itemname={"Basti-Multiverse# ##"}
                chaintype={"ETH"}
                creatorname={"Alabaster Inc."}
                price={1}
              />
            </div>
          );
        })}
      </div>
      <div className="big_body_link_footer">
        {/* <Link href="/collections"> */}
        <a href="/collections">Scout More Basti!</a>
        {/* </Link> */}
      </div>
    </div>
  );
}

// https://jsonplaceholder.typicode.com/posts?_limit=6

// this whole code still doesn't work

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   if (!posts) {
//     return {
//       notFound: True,
//     };
//   } else {
//     console.log("Link Found");
//   }

//   return {
//     props: {
//       datalist,
//     },
//   };
// }
