//subcomponent
import SuggestedCollectionsList from "@/components/SuggestedCollectionsList/SuggestedCollectionsList";
//dependencies
import Link from "next/link";
import React from "react";

export default function SuggestedCollections() {
  const sample_size = ["", "", "", ""];

  return (
    <div className="body">
      <div className="small_body_title">
        <p>Suggested Collections</p>
      </div>
      <div className="small_body_content">
        <SuggestedCollectionsList datalist={sample_size} />
      </div>
      <div className="small_body_link_footer">
        <Link href="#">
          <a>Scout more collections</a>
        </Link>
      </div>
    </div>
  );
}
