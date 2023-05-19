import React from 'react'
import './OYoutube.css'
import { Container } from "react-bootstrap";

const OYoutube = () => {
  return (
    <div>
      <div className="OurWork">
        <Container className="ourWork-container">
          <div className="carousel-content top-ourWork">
            <h1>VIDEOS</h1>
            <p>
              Watch the latest videos and <a href="/">subscribe on YouTube.</a>
            </p>
          </div>
          <div className="line-our"></div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/1ODECIAgrJk"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="line-our"></div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/2dn1ghueydo"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="line-our"></div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/4zLONh4pPXs"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="line-our"></div>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Ojx4NmyZy9M"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="line-our"></div>
        </Container>
      </div>
    </div>
  )
}

export default OYoutube
