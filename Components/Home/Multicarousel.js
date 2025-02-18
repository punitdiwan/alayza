import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Multicarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2000}
        autoPlay={true}
        showDots={true}
      >
        <div className="multi-carousel-image">
          <img src="./images/fa11.jpg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        {/* <div className="multi-carousel-image">
          <img src="./images/new 4.jpg" className="image" />
          <div className="middle">
            <div className="text">Read More</div>
          </div>
        </div> */}
        <div className="multi-carousel-image">
          <img src="./images/m1.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/fa3.jpg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/m2.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/m3.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/m4.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/m5.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/m6.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
        <div className="multi-carousel-image">
          <img src="./images/m7.jpeg" className="image" />
          {/* <div className="middle">
            <div className="text">Read More</div>
          </div> */}
        </div>
      </Carousel>
    </>
  );
};

export default Multicarousel;
