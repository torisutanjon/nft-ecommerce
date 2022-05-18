//dependencies
import React, { useRef, useState } from "react";
import Image from "next/image";
import { requireAuth } from "hooks/protected_routes_auth";
//subcomponent
import Header from "@/components/Header/Header";
//icons
import addimage_icon from "@/image/add_image.png";
//styles
import CreateCollectionPageStyle from "../styles/CreateCollectionPageStyle.module.css";
import DropDownStyle from "../styles/DropDownStyle.module.css";

export default function CreateCollection() {
  const [logoPreview, setLogoPreview] = useState(addimage_icon);
  const [bannerPreview, setBannerPreview] = useState(addimage_icon);
  const [blockchain, setblockhain] = useState("Blockchain");
  const [category, setcategory] = useState("Category");

  //usestate for blockchain dropdown
  const [blockchain_divh, setblockchain_divh] = useState(0);
  const [blockchain_display, setblockchain_display] = useState("none");
  //usestate for category dropdown
  const [category_divh, setcategory_divh] = useState(0);
  const [category_display, setcategory_display] = useState("none");

  //handler for blockchain dropdown
  const blockchain_handler = () => {
    if (blockchain_divh === 0) {
      setblockchain_divh("150px");
      setblockchain_display("block");
    } else {
      setblockchain_divh(0);
      setblockchain_display("none");
    }
  };
  //handler for category dropdown
  const category_handler = () => {
    if (category_divh === 0) {
      setcategory_divh("150px");
      setcategory_display("block");
    } else {
      setcategory_divh(0);
      setcategory_display("none");
    }
  };

  //useref for input field of logo
  const logoref = useRef(null);

  const chooselogo = async () => {
    logoref.current.click();
  };

  //useref for input field for banner
  const bannerref = useRef(null);

  const choosebanner = async () => {
    bannerref.current.click();
  };

  return (
    <div id="app_main_body">
      <Header title={"Create Collection"} />
      <form
        id={CreateCollectionPageStyle.form}
        //direct call using <form action = "">
        //as catching if passed file using multer in the backend is kinda complicated using api call
        action="http://localhost:5000/createcollection"
        encType="multipart/form-data"
        method="post"
      >
        <div id={CreateCollectionPageStyle.content}>
          <p style={{ fontSize: `40px` }}>Create new collection</p>
          <div id={CreateCollectionPageStyle.name_container}>
            <p>Name</p>
            <p style={{ color: `#FF0000` }}>*</p>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Collection name"
            required
          />
          <p>Logo</p>
          {/* make a hidden <input type = "file"/> */}
          <input
            type="file"
            name="logo"
            id="logo"
            ref={logoref}
            style={{ display: "none" }}
            onChange={(e) => {
              setLogoPreview(URL.createObjectURL(e.target.files[0]));
            }}
            required
          />
          <button
            type="button"
            onClick={() => chooselogo()}
            id={CreateCollectionPageStyle.logo_btn}
          >
            <Image src={logoPreview} layout="fill" />
          </button>
          <p>Banner Image</p>
          {/* make a hidden <input type = "file"/> */}

          <input
            type="file"
            name="banner"
            id="banner"
            ref={bannerref}
            style={{ display: "none" }}
            onChange={(e) => {
              setBannerPreview(URL.createObjectURL(e.target.files[0]));
            }}
            required
          />
          <button
            type="button"
            id={CreateCollectionPageStyle.banner_btn}
            onClick={() => choosebanner()}
          >
            <Image src={bannerPreview} layout="fill" />
          </button>
          <p>Description</p>
          <textarea
            rows=""
            cols=""
            placeholder="Insert description about your collection."
            name="description"
            required
          />
          {/* --------------blockchain dropdown starts here------------ */}
          <p>Blockchain</p>
          <div id={DropDownStyle.dropdown_component}>
            <input
              type="text"
              name="blockchain"
              value={blockchain}
              style={{ display: `none` }}
              readOnly
            />
            <div
              id={DropDownStyle.dropdown_div}
              onClick={() => blockchain_handler()}
            >
              <p id={DropDownStyle.dropdown_component_p}>{blockchain}</p>
              <div
                id={DropDownStyle.dropdown_container}
                style={{
                  height: blockchain_divh,
                  display: blockchain_display,
                }}
              >
                <div
                  className={DropDownStyle.content}
                  onClick={() => setblockhain("Etherium")}
                >
                  <p id={DropDownStyle.content_p}>Etherium</p>
                </div>
                <div
                  className={DropDownStyle.content}
                  onClick={() => setblockhain("Polygon")}
                >
                  <p id={DropDownStyle.content_p}>Polygon</p>
                </div>
              </div>
            </div>
          </div>
          {/* --------------blockchain dropdown ends here------------ */}

          {/* -----------------category dropdown starts here----------------- */}
          <p>Category</p>
          <div id={DropDownStyle.dropdown_component}>
            <input
              type="text"
              name="category"
              value={category}
              style={{ display: `none` }}
              readOnly
            />
            <div
              id={DropDownStyle.dropdown_div}
              onClick={() => category_handler()}
            >
              <p id={DropDownStyle.dropdown_component_p}>{category}</p>
              <div
                id={DropDownStyle.dropdown_container}
                style={{
                  height: category_divh,
                  display: category_display,
                }}
              >
                <div
                  className={DropDownStyle.content}
                  onClick={() => setcategory("Art")}
                >
                  <p id={DropDownStyle.content_p}>Art</p>
                </div>
                <div
                  className={DropDownStyle.content}
                  onClick={() => setcategory("Photography")}
                >
                  <p id={DropDownStyle.content_p}>Photography</p>
                </div>
                <div
                  className={DropDownStyle.content}
                  onClick={() => setcategory("Music")}
                >
                  <p id={DropDownStyle.content_p}>Music</p>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------category dropdown starts here----------------- */}
          <button
            type="submit"
            id={CreateCollectionPageStyle.create_btn}
            onClick={() =>
              window.alert(
                "Page will be reloaded automatically \n after uploading of collection  \n Click 'Ok' to start uploading"
              )
            }
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

//api call for protected routes if user is logged in or not
export const getServerSideProps = requireAuth(async (context) => {
  return {
    props: {},
  };
});
