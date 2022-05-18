//dependencies
import React from "react";
// subcomponents
import CreatorsPageList from "@/components/CreatorsPageList/CreatorsPageList";
//styles
import CreatorsPageStyle from "../styles/CreatorsPageStyle.module.css";
const CreatorsPage = () => {
  const sample_data = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  //create api call here to retrieve creators list from database

  return (
    <div id="app_main_body">
      <div id={CreatorsPageStyle.navigation_div}>
        <div id={CreatorsPageStyle.title_div}>
          <p>Creators</p>
        </div>
        <div id={CreatorsPageStyle.clickables_div}>
          <div id={CreatorsPageStyle.buttons_div}>
            <button type="button">Trending</button>
            <button type="button">Top</button>
          </div>
          <div id={CreatorsPageStyle.search_bar}>
            <button type="button" title="search . . ."></button>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div id={CreatorsPageStyle.content}>
        {/* pass the retrieve data here */}
        <CreatorsPageList datalist={sample_data} />
      </div>
    </div>
  );
};

export default CreatorsPage;
