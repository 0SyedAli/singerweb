import React from "react";
import "./SocialIcon.css";
import spotify from "../../images/spotify-2.svg";
import youtube from "../../images/YouTube.png";
import music from "../../images/PngItem_19066.png";
import amazon from "../../images/amazonMusic.png";
import arrow from "../../images/arrow-right-white.svg";

const SocialIcon = () => {
  return (
    <div>
      <div className="section wf-section">
        <div className="container w-container">
          <h2 className="heading">Follow</h2>
          <div className="w-layout-grid grid">
            <a href="https://open.spotify.com/artist/32vR2XUC8TBvRBfG8dTZIV" target="_blank" className="follow w-inline-block" rel="noreferrer">
              <img
                src={spotify}
                loading="lazy"
                alt="https://open.spotify.com/artist/32vR2XUC8TBvRBfG8dTZIV"
                className="image follow-img"
              />
              <div className="text-block-2">
                Listen on
                <br />
              </div>
              <div className="text-block social">
                Spotify
                <br />
              </div>
              <img
                src={arrow}
                loading="lazy"
                alt="https://open.spotify.com/artist/32vR2XUC8TBvRBfG8dTZIV"
                className="image-6"
                style={{ width: "1.7rem" }}
              />
            </a>
            <a href="https://www.youtube.com/@samirhassanofficial" target="_blank" className="follow w-inline-block" rel="noreferrer">
              <img
                src={youtube}
                loading="lazy"
                alt="https://www.youtube.com/@samirhassanofficial"
                className="image follow-img"
              />
              <div className="text-block-2">
                Listen on
                <br />
              </div>
              <div className="text-block social yt">
                YouTube
                <br />
              </div>
              <img
                src={arrow}
                loading="lazy"
                alt="https://www.youtube.com/@samirhassanofficial"
                className="image-6"
                style={{ width: "1.7rem" }}
              />
            </a>
            <a href="https://music.apple.com/us/artist/samir-hassan/1460431618" target="_blank" className="follow w-inline-block" rel="noreferrer">
              <img
                src={music}
                loading="lazy"
                alt="https://music.apple.com/us/artist/samir-hassan/1460431618"
                className="image follow-img"
              />
              <div className="text-block-2">
                Listen on
                <br />
              </div>
              <div className="text-block social am">
                Apple Music
                <br />
              </div>
              <img
                src={arrow}
                loading="lazy"
                alt="https://music.apple.com/us/artist/samir-hassan/1460431618"
                className="image-6"
                style={{ width: "1.7rem" }}
              />
            </a>
            <a href="https://music.amazon.com/artists/B07STNT8FT/samir-hassan?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_SWHRkp5Udedj5t4xiHXX5ftxF" target="_blank" className="follow w-inline-block" rel="noreferrer">
              <img
                src={amazon}
                loading="lazy"
                alt="https://music.amazon.com/artists/B07STNT8FT/samir-hassan?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_SWHRkp5Udedj5t4xiHXX5ftxF"
                className="image follow-img"
                style={{
                }}
              />
              <div className="text-block-2">
                Listen on
                <br />
              </div>
              <div className="text-block social az">
                Amazon
                <br />
              </div>
              <img
                src={arrow}
                loading="lazy"
                alt="https://music.amazon.com/artists/B07STNT8FT/samir-hassan?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_SWHRkp5Udedj5t4xiHXX5ftxF"
                className="image-6"
                style={{ width: "1.7rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default SocialIcon;
