import React from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/logo.webp";
function Seo({ title, content, keyword }) {
  return (
    <>
      <Helmet>
        <Helmet>
          <title>{title || "Dun Drive"}</title>
          {content && <meta name="description" content={content} />}
          {keyword && <meta name="keywords" content={keyword} />}
          <meta name="author" content="Dun Drive" />
          {title && <meta property="og:title" content={title} />}
          {content && <meta property="og:description" content={content} />}
          <meta property="og:image" content={logo} />
          <meta property="og:url" content="https://dundrive.in/" />
        </Helmet>
      </Helmet>
    </>
  );
}

export default Seo;
