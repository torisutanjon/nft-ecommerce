//dependencies
import React, { useState } from "react";
import { signup_api, login_api } from "./api";
import { setCookies } from "cookies-next";
import Image from "next/image";
//icons
import or_image from "@/image/or_image.png";
import fb_icon from "@/image/fb-icon.png";
import gmail_icon from "@/image/Google_SignIn.png";
//subcomponent
import Header from "@/components/Header/Header";
// styles
import SignInUpPageStyle from "../styles/SignInUpPageStyle.module.css";

export default function SignUpPage() {
  //states
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  //onchange handler for all input fields
  const handleOnChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //signin button handler
  const registerUser = async (event) => {
    event.preventDefault();

    setError("");
    try {
      if (data.password === data.cpassword) {
        signup_api(
          data.firstname,
          data.lastname,
          data.email,
          data.password
        ).then((res) => {
          if (res.status === 200) {
            setError(res.message);
            //auto login
            login_api(data.email, data.password)
              .then((res) => {
                if (res.status === 200) {
                  setCookies("token", res.user, {
                    sameSite: "strict",
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60 * 24 * 7,
                    path: "/",
                  });
                  window.location.href = "/";
                } else {
                  setError("Connection Error Occured");
                }
              })
              .catch((err) => {
                console.log(`error: ${err}`);
              });
            //redirect to signin
          } else {
            setError(res.message);
          }
        });
      } else {
        setError("Password Not Matched!");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div id="app_main_body">
      <Header title={"Sign Up"} />
      <div id={SignInUpPageStyle.content}>
        <div id={SignInUpPageStyle.form}>
          {error && (
            <div id={SignInUpPageStyle.error_div}>
              <p id={SignInUpPageStyle.error_p}>{error}</p>
            </div>
          )}
          <p id={SignInUpPageStyle.form_title}>Please fill out the form</p>
          <form>
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                value={data.firstname}
                onChange={handleOnChange}
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={data.lastname}
                onChange={handleOnChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                style={{ width: `100%` }}
                placeholder="Email"
                value={data.email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleOnChange}
                required
              />
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                value={data.cpassword}
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="button" onClick={(e) => registerUser(e)}>
              Sign up
            </button>
          </form>
        </div>
        <div id={SignInUpPageStyle.lower_container}>
          <div
            style={{
              position: `relative`,
              width: `80%`,
              height: `10%`,
            }}
          >
            <Image src={or_image} layout="fill" />
          </div>
          <div id={SignInUpPageStyle.button_container}>
            <button type="button" title="Sign Up with Facebook">
              <Image src={fb_icon} layout="fill" />
            </button>
            <button type="button" title="Sign Up with Gmail">
              <Image src={gmail_icon} layout="fill" />
            </button>
          </div>
          <a href="signin">Already have an account?</a>
        </div>
      </div>
      <p id={SignInUpPageStyle.copyright}>&copy;2022 All rights reserved</p>
    </div>
  );
}
