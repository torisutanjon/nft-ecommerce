//dependencies
import React from "react";
import Layout from "@/components/LayoutComponent/Layout";
import "../styles/globalstyle.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
