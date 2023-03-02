import Carousel from "react-bootstrap/Carousel";

function Carousel1() {
  return (
    <Carousel fade>
  <Carousel.Item className="carousel_image_new">  
        <img
          className="d-block w-100 h-75"
          src="https://picsum.photos/0/"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100 h-75"
          src="https://picsum.photos/0/"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100 h-auto"
          src="https://picsum.photos/0/"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
