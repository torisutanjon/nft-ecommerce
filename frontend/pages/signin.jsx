// dependencies
import React, { useState } from "react";
import { login_api } from "./api";
import { setCookies } from "cookies-next";
import Image from "next/image";
//icons
import fb_icon from "../images/fb-icon.png";
import gmail_icon from "../images/Google_SignIn.png";
//subcomponent
import Header from "@/components/Header/Header";
// styles
import SignInUpPageStyle from "../styles/SignInUpPageStyle.module.css";

const SignIn = () => {
  //states
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //login button handler
  const login_handler = (e) => {
    e.preventDefault();
    try {
      login_api(data.email, data.password)
        .then((res) => {
          if (res.status === 200) {
            console.log(`user: ${res.user}`);
            //this should be added with httpOnly: True when deployed to https certified domain for security
            setCookies("token", res.user /*this res.user is the token*/, {
              sameSite: "strict",
              secure: process.env.NODE_ENV !== "development",
              maxAge: 60 * 60 * 24 * 7,
              path: "/",
            });
            setError(res.message);
            window.location.href = "/";
          } else {
            setError("User Not Found!");
          }
        })
        .catch((err) => {
          console.log(`error: ${err}`);
        });
    } catch (error) {}
  };
  //onchange handler frr input fields
  const handleOnChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  return (
    <div id="app_main_body">
      <Header title={"Sign In"} />
      <div id={SignInUpPageStyle.content}>
        <div id={SignInUpPageStyle.form}>
          {error && (
            <div id={SignInUpPageStyle.error_div}>
              <p id={SignInUpPageStyle.error_p}>{error}</p>
            </div>
          )}
          <input
            style={{ marginTop: `5%` }}
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Email"
          />
          <input
            style={{ marginTop: `5%` }}
            type="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
            placeholder="Password"
          />
          <button type="button" onClick={(e) => login_handler(e)}>
            Sign in
          </button>
        </div>
        <div id={SignInUpPageStyle.lower_container}>
          <p style={{ fontSize: `30px` }}>Sign In With</p>
          <div id={SignInUpPageStyle.button_container}>
            <button title="Login Using Facebook Account" type="button">
              <Image src={fb_icon} layout="fill" />
            </button>
            <button title="Login Using Google Account" type="button">
              <Image src={gmail_icon} layout="fill" />
            </button>
          </div>
          <a href="#" style={{ fontSize: `18px` }}>
            Forgot Password?
          </a>
          <a href="/signup">No Account? Create Here</a>
        </div>
      </div>
      <p id={SignInUpPageStyle.copyright}>&copy;2022 All rights reserved</p>
    </div>
  );
};

export default SignIn;
