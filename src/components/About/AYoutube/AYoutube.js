import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from '../../../images/img5.jpg' 
import img2 from '../../../images/img1.jpg' 
import img3 from '../../../images/img3.jpg' 
import img4 from '../../../images/img4.jpg' 
import './AYoutube.css'

function Youtube() {
  return (
    <Container className="container-ab">
        <div className="carousel-content">
            <h1>PHOTOS</h1>
            <p><a href="/">see more...</a></p>
        </div>
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block   height-ab"
          src={img1}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block  height-ab"
          src={img2}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block   height-ab"
          src={img3}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block   height-ab"
          src={img4}
          alt="First slide"
        />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Youtube;
