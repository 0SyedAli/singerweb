import React from "react";
import "./OurWork.css";
import OBanner from "./OBanner/OBanner";
import SocialIcon from "../../pages/SocialMediaIcon/SocialIcon";
import Subscribe from "../../pages/subscribe/Subscribe";
import Footer from "../../pages/Footer/Footer";
import OYoutube from "./OYoutube/OYoutube";

const OurWork = () => {
  return (
    <>
      <OBanner />
      <OYoutube />
      <SocialIcon />
      <Subscribe />
      <Footer />
    </>
  );
};

export default OurWork;
