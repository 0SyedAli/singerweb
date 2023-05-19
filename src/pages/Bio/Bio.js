import React from "react";
import "./Bio.css";
import bioImg from "../../images/bio.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Bio = () => {
  return (
    <div>
      <div className="bio-container">
        <h1 className="bio-h1">BIOGRAPHY</h1>
        <div className="bio-main">
          <div className="bio-img">
            <img src={bioImg} alt="" />
          </div>
          <div className="bio-content">
            <p className="bio-data">
              At 16, I left school in Barbados to become a professional
              musician. With three of my friends, we formed the band Cover
              Drive, and started our musical journey. From 2010-2018, we worked
              with top producers, scored three top tens on the UK official chart
              — including our #1 hit record, “Twilight." We earned platinum
              records, opened for Rihanna and Kelly Clarkson, toured the US
              college circuit (210 shows), created popular web series (Chasing
              Cover Drive and Weekend Lime), were featured on HGTV, and garnered
              over 170 million Youtube/Vevo views on our channel. Now I'm doing
              my own thing! I dropped my debut EP titled, "#127 Solace" in 2021,
              and I just released my first album, "Secrets Behind Our Smiles" on
              02/23!
            </p>
            <p>
              <a href="/">
                <em className="bio-arrow arrow-mg">
                  <FaArrowRight />
                </em>{" "}
                <span className="hover-2 ">On Youtube</span>
              </a>
            </p>
            <p>
              <a href="/">
                <em className="bio-arrow arrow-mg">
                  <FaArrowRight />
                </em>{" "}
                <span className="hover-2">On Spotify</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
