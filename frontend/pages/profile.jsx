//dependencies
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  getuserprofileinfo_api,
  updateuserprofile_api,
  getuserprofilelogo_api,
  getuserprofilebanner_api,
} from "./api";
import { getCookie } from "cookies-next";
import { requireAuth } from "hooks/protected_routes_auth";
//icons
import add_image from "@/image/add_image.png";

//styles
import ProfilePageStyle from "../styles/ProfilePageStyle.module.css";

export default function ProfilePage() {
  //refs
  const logoref = useRef(null);
  const bannerref = useRef(null);
  //states
  const [logoImage, setLogoImage] = useState(add_image);
  const [bannerImage, setBannerImage] = useState(add_image);

  //needed to individually set the data on each state
  //therefor needed to create the state individually as well

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [fblink, setFblink] = useState("");
  const [linkedinlink, setLinkedInLink] = useState("");
  const [twitterlink, setTwitterLink] = useState("");
  const [walletaddress, setWalletAddress] = useState("");

  const chooselogo = async () => {
    logoref.current.click();
  };

  const choosebanner = async () => {
    bannerref.current.click();
  };

  //update of userprofile info handler
  const submit_handler = async () => {
    try {
      window.alert(
        "Page will automatically reload after the update \n Click 'OK' to apply updated."
      );
      const token = getCookie("token");
      updateuserprofile_api(
        token,
        username,
        bio,
        email,
        fblink,
        linkedinlink,
        twitterlink,
        walletaddress
      ).then((res) => {
        console.log(res);
        location.href = "/profile";
      });
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  //make an api call for user information to the backend
  useEffect(() => {
    try {
      const token = getCookie("token");

      //get user profile logo
      getuserprofilelogo_api(token).then(async (res) => {
        setLogoImage(`data:"image/png";base64,${res.logo}`);
      });

      //get user profile banner
      getuserprofilebanner_api(token).then((res) => {
        setBannerImage(`data:image/png;base64,${res.banner}`);
      });
      //get userdata from daackend
      getuserprofileinfo_api(token).then((res) => {
        console.log(res.userdata);
        //check if data exists then set it
        if (res.userdata.username !== undefined) {
          setUsername(res.userdata.username);
        }
        if (res.userdata.bio !== undefined) {
          setBio(res.userdata.bio);
        }
        if (res.userdata.email !== undefined) {
          setEmail(res.userdata.email);
        }
        if (res.userdata.fblink !== undefined) {
          setFblink(res.userdata.fblink);
        }
        if (res.userdata.linkedinlink !== undefined) {
          setLinkedInLink(res.userdata.linkedinlink);
        }
        if (res.userdata.twitterlink !== undefined) {
          setTwitterLink(res.userdata.twitterlink);
        }
        if (res.userdata.walletaddress) {
          setWalletAddress(res.userdata.walletaddress);
        }
      });
    } catch (error) {
      console.log(`Error in useeffect: ${error}`);
    }
  }, []);
  return (
    <div id={ProfilePageStyle.body}>
      <div id={ProfilePageStyle.title_div}>
        <p id={ProfilePageStyle.title}>Profile Setting</p>
      </div>
      <div id={ProfilePageStyle.content_form}>
        <div id={ProfilePageStyle.left_div}>
          <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Bio</p>
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ marginBottom: `2%` }}>Link Social Account</p>
          <p style={{ fontSize: `22px`, color: `#a85f36` }}>Facebook</p>
          <input
            type="email"
            style={{ height: `40px` }}
            name="fblink"
            placeholder="Facebook Account"
            value={fblink}
            onChange={(e) => setFblink(e.target.value)}
          />
          <p style={{ fontSize: `22px`, color: `#a85f36` }}>LinkedIn</p>
          <input
            type="email"
            style={{ height: `40px` }}
            name="linkedinlink"
            placeholder="LinkedIn Account"
            value={linkedinlink}
            onChange={(e) => setLinkedInLink(e.target.value)}
          />
          <p style={{ fontSize: `22px`, color: `#a85f36` }}>Twitter</p>
          <input
            type="email"
            style={{ height: `40px` }}
            name="twitterlink"
            placeholder="Twitter Account"
            value={twitterlink}
            onChange={(e) => setTwitterLink(e.target.value)}
          />
          <p>Wallet Address</p>
          <div id={ProfilePageStyle.walletaddress_div}>
            <input
              type="text"
              name="walletaddress"
              placeholder="Wallet Address "
              value={walletaddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button type="button"></button>
          </div>
          <button
            id={ProfilePageStyle.apply_btn}
            type="button"
            onClick={() => submit_handler()}
          >
            SAVE CHANGES
          </button>
        </div>
        <div id={ProfilePageStyle.right_div}>
          {/* upload form for profile logo file */}
          <form
            action="http://localhost:5000/profile/uploadlogo"
            encType="multipart/form-data"
            method="post"
          >
            <p>Logo Image</p>
            <input
              type="file"
              name="logoimage"
              ref={logoref}
              style={{ display: `none` }}
              onChange={(e) =>
                setLogoImage(URL.createObjectURL(e.target.files[0]))
              }
              required
            />
            <button
              type="button"
              id={ProfilePageStyle.logo_btn}
              onClick={() => chooselogo()}
            >
              {/* <Image src={logoImage} layout="fill" /> */}
              <Image src={logoImage} layout="fill" />
            </button>
            <button
              type="submit"
              id={ProfilePageStyle.submit_button}
              onClick={() => {
                if (logoImage !== add_image) {
                  window.alert(
                    "Page will be reloaded after the image is uploaded \n Click 'OK' to start uploading"
                  );
                }
              }}
            >
              Upload
            </button>
          </form>
          {/* upload form for banner file */}
          <form
            style={{ height: `35%` }}
            action="http://localhost:5000/profile/uploadbanner"
            encType="multipart/form-data"
            method="post"
          >
            <p>Profile Banner</p>
            <input
              type="file"
              name="bannerimage"
              ref={bannerref}
              style={{ display: `none` }}
              onChange={(e) =>
                setBannerImage(URL.createObjectURL(e.target.files[0]))
              }
              required
            />
            <button
              type="button"
              id={ProfilePageStyle.banner_btn}
              onClick={() => choosebanner()}
            >
              <Image src={bannerImage} layout="fill" />
            </button>
            <button
              type="submit"
              id={ProfilePageStyle.submit_button}
              onClick={() => {
                if (logoImage !== add_image) {
                  window.alert(
                    "Page will be reloaded after the image is uploaded \n Click 'OK' to start uploading"
                  );
                }
              }}
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = requireAuth(async (context) => {
  return {
    props: {},
  };
});
