import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.webp";
function Seo({ title, content, keyword }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content="Dun Drive" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dundirve.in/" />
      </Helmet>
    </>
  );
}

export default Seo;
