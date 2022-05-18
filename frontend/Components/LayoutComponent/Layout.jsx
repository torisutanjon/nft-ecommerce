//dependencies
import React, { useEffect, useState } from "react";
import { getCookie, removeCookies } from "cookies-next";
import jwt from "jsonwebtoken";
//subcomponents
import TopNav from "@/components/TopNav/TopNav";
export default function Layout({ children }) {
  const [loggedstate, setLoggedState] = useState(false);
  useEffect((req) => {
    const token = getCookie("token");
    console.log(`token: ${token}`);
    const user = jwt.decode(token);
    if (!user) {
      removeCookies("name");
      setLoggedState(false);
    } else {
      setLoggedState(true);
    }
  }, []);

  return (
    <div id="app_main_body">
      <TopNav loogedIn={loggedstate} />
      {children}
    </div>
  );
}
