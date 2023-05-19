import React from "react";
import "./Collection.css";
import colImg1 from "../../images/card1.jpeg";
import colImg2 from "../../images/card2.jpeg";

const Collection = () => {
  return (
    <div>
      <div className="collection-container">
        <div className="collection-cards">
          <div className="collection-card1">
            <img src={colImg1} alt="" />
            <h3>Samir Hassan Song Collection</h3>
            <h1>
              Click above for a complete playlist of Samir Roashan's songs!
            </h1>
          </div>
          <div className="collection-card1">
            <img src={colImg2} alt="" />
            <h3>Event Inquiry Form</h3>
            <h1>
              Please click above to fill out the form for any event inquiries!
            </h1>
            <p>
              Please allow 1-3 business days for the management team to contact
              you about your event. <br /> We appreciate your patience and thank you
              for your interest in working with Samir Roashan!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
