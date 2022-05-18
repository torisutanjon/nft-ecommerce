//subcomponent
import SuggestedCreatorsList from "@/components/SuggestedCreatorsList/SuggestedCreatorsList";
//dependencies
import Link from "next/link";
import React from "react";

export default function SuggestedCreators() {
  const sample_size = ["", "", "", ""];

  return (
    <div className="body">
      <div className="small_body_title">
        <p>Suggested Creators</p>
      </div>
      <div className="small_body_content">
        <SuggestedCreatorsList datalist={sample_size} />
      </div>
      <div className="small_body_link_footer">
        {/* <Link href="/creators"> */}
        <a href="/creators">Scout more creators</a>
        {/* </Link> */}
      </div>
    </div>
  );
}
