import React from "react";
import ABanner from "./ABanner/ABanner";
import Bio from "../../pages/Bio/Bio";
import Subscribe from "../../pages/subscribe/Subscribe";
import Footer from "../../pages/Footer/Footer";
import AYoutube from "./AYoutube/AYoutube";

const About = () => {
  return (
    <div>
      <ABanner />
      <Bio />
      <AYoutube />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
