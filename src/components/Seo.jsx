import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.png";
function Seo({ title, content, keyword, detailed }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content="Dun Drive" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={detailed} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://dundirve.in/" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:see_also"
          content="https://www.instagram.com/dundrive/"
        />
        <meta
          property="og:see_also"
          content="https://www.facebook.com/profile.php?id=61583173851415&sfnsn=wa"
        />
      </Helmet>
    </>
  );
}

export default Seo;
