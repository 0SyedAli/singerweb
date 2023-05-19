import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import './Youtube.css'

function Youtube() {
  return (
    <Container>
        <div className="carousel-content">
            <h1>VIDEOS</h1>
            <p>Watch the latest videos and <a href="/">subscribe on YouTube.</a></p>
        </div>
      <Carousel>
        <Carousel.Item>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/1ODECIAgrJk"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/2dn1ghueydo"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/4zLONh4pPXs"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Ojx4NmyZy9M"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Youtube;
