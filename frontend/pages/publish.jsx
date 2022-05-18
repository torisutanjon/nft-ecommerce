// dependencies
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { requireAuth } from "hooks/protected_routes_auth";
import { getcollectionlist_api } from "./api";
import add_file_icon from "@/image/add_image.png";
//subcomponenet
import Header from "@/components/Header/Header";
// styles
import DropDownStyle from "../styles/DropDownStyle.module.css";
import PublishPageStyle from "../styles/PublishPageStyle.module.css";
export default function PublishPage() {
  const [collection_divh, setcollection_divh] = useState(0);
  const [collection_divdisplay, setcollection_divdisplay] = useState("none");
  const [blockchain_divh, setblockchain_divh] = useState(0);
  const [blockchain_divdisplay, setblockchain_divdisplay] = useState("none");
  const fileref = useRef(null);
  const [filePreview, setFilePreview] = useState(add_file_icon);
  const [blockchain, setBlockchain] = useState("Blockchain");
  const [collectionName, setCollectionName] = useState("Collection List");
  const [collection_id, setCollection_id] = useState("");

  //collection dropdown handler
  const collectionHandler = () => {
    if (collection_divh === 0) {
      setcollection_divh("150px");
      setcollection_divdisplay("block");
    } else {
      setcollection_divh(0);
      setcollection_divdisplay("none");
    }
  };

  //blockchain dropdown handler
  const blockchain_handler = () => {
    if (blockchain_divh === 0) {
      setblockchain_divh("150px");
      setblockchain_divdisplay("block");
    } else {
      setblockchain_divh(0);
      setblockchain_divdisplay("none");
    }
  };

  const choosefile = async () => {
    fileref.current.click();
  };
  //constantly check for collection list whenever the page is loaded
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = getCookie("token");
    getcollectionlist_api(token).then((res) => {
      res.datalist.map((datalist) => {
        console.log(datalist);
        setData((oldArray) => [...oldArray, datalist]);
      });
    });
  }, []);

  return (
    <div id="app_main_body">
      <Header title={"Publish"} />
      {/* upload form for publish nft */}
      <form
        id={PublishPageStyle.content}
        action="http://localhost:5000/publish"
        encType="multipart/form-data"
        method="post"
      >
        <div id={PublishPageStyle.left_side}>
          <p style={{ fontSize: `40px` }}>Publish New NFT</p>
          <div style={{ marginTop: `10%` }}>
            <p>Name</p>
            <p style={{ color: `#f67575` }}>*</p>
          </div>
          <input type="text" name="nftname" placeholder="Item name" required />
          <p>Description</p>
          <textarea
            name="nftdescription"
            placeholder="Insert description that will show below your NFT item."
            required
          />
          <p style={{ marginTop: `10%` }}>Collection List</p>
          <p id={PublishPageStyle.collection_description_p}>
            The collection is like a folder of your published items{" "}
          </p>

          {/* -----------------collection list dropdown starts here---------- */}
          <div id={DropDownStyle.dropdown_component}>
            <input
              type="text"
              name="collection_id"
              value={collection_id}
              style={{ display: `none` }}
              readOnly
            />
            <div
              id={DropDownStyle.dropdown_div}
              onClick={() => collectionHandler()}
            >
              <p id={DropDownStyle.dropdown_component_p}>{collectionName}</p>
              <div
                id={DropDownStyle.dropdown_container}
                style={{
                  height: collection_divh,
                  display: collection_divdisplay,
                }}
              >
                {data.map((data, key) => {
                  return (
                    <div
                      className={DropDownStyle.content}
                      onClick={() => {
                        setCollectionName(data.collection_name),
                          setCollection_id(data._id);
                      }}
                    >
                      <p id={DropDownStyle.content_p}>{data.collection_name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* -----------------collection list dropdown ends here---------- */}
          <div id={PublishPageStyle.a_container}>
            <a href="/createcollection">create collection</a>
          </div>

          <p>Blockchain</p>
          {/* -----------------blockchain dropdown starts here---------- */}
          <div id={DropDownStyle.dropdown_component}>
            {/* input tag to hold the value for blockchain */}
            <input
              type="text"
              name="blockchain"
              value={blockchain}
              style={{ display: `none` }}
              readOnly
            />

            {/* blockchain dropdown */}
            <div
              id={DropDownStyle.dropdown_div}
              onClick={() => blockchain_handler()}
            >
              <p id={DropDownStyle.dropdown_component_p}>{blockchain}</p>
              <div
                id={DropDownStyle.dropdown_container}
                style={{
                  height: blockchain_divh,
                  display: blockchain_divdisplay,
                }}
              >
                <div
                  className={DropDownStyle.content}
                  onClick={() => setBlockchain("Etherium")}
                >
                  <p id={DropDownStyle.content_p}>Etherium</p>
                </div>
                <div
                  className={DropDownStyle.content}
                  onClick={() => setBlockchain("Polygon")}
                >
                  <p id={DropDownStyle.content_p}>Polygon</p>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------blockchain dropdown ends here---------- */}
          <button
            type="submit"
            onClick={() => {
              window.alert(
                "Please Kindly Wait as NFT is being uploaded \n The Page will automatiacally reloaded after upload \n Click `OK` to Start Uploading"
              );
            }}
          >
            Publish
          </button>
        </div>
        <div id={PublishPageStyle.right_side}>
          <p style={{ fontSize: `25px`, marginTop: `15%` }}>
            Image, Video, Audio, or 3D Model
          </p>
          <div>
            <p style={{ color: `#f67575` }}>*</p>
            <p id={PublishPageStyle.required_field_p}>Required field</p>
          </div>
          <input
            type="file"
            name="nftfile"
            ref={fileref}
            style={{ display: "none" }}
            onChange={(e) => {
              setFilePreview(URL.createObjectURL(e.target.files[0]));
            }}
            required
          />
          <button type="button" title="Add File" onClick={() => choosefile()}>
            <Image src={filePreview} layout="fill" priority />
          </button>
          <p id={PublishPageStyle.footer_p}>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps = requireAuth(async (context) => {
  return {
    props: {},
  };
});
