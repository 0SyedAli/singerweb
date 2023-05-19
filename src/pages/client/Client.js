import React from "react";
import "./client.css";
import facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import google from "../../images/g+.png";
import spotify from "../../images/spotify.png";
import youtube from "../../images/youtube.svg";
const Client = () => {
  return (
    <div>
      <section className="brand-area-client">
        <h3>FOLLOW</h3>
        <div className="client-img">
          <div className="follow-icon">
            <img src={facebook} alt="cone" />
          </div>
          <div className="follow-icon">
            <img src={Instagram} alt="/" />
          </div>
          <div className="follow-icon">
            <img src={twitter} alt="/" />
          </div>
          <div className="follow-icon">
            <img src={spotify} alt="/" />
          </div>
          <div className="follow-icon">
            <img src={youtube} alt="/" />
          </div>
          <div className="follow-icon follow-google">
            <img src={google} alt="/" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
