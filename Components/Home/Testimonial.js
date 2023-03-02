import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      <section
        className="testimonial-main"
        style={{ textAlign: "center" }}
      >
        <div>
          <p>What our patient say</p>
          <h2>OUR TESTIMONIALS</h2>
          <img src="./images/heading-art-01.svg" />
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          className="carousel-main-1"
        >
          <div className="carousel-inner-1-main">
            {/* <img src="https://picsum.photos/1200/400" /> */}
            <h6>
              <em>
                Good work and results of my laser hair removal , pretty
                satisfied, thank you Doctor . I was recommended by my sister
              </em>
            </h6>
            <p>✱ Results may vary person to person.</p>
            <h4>Naveen Kumar</h4>
          </div>
          <div className="carousel-inner-1-main">
            <h6>
              <em>
                I was taking hair loss treatment from the clinic . My results
                are good and I In constant touch with the doctor for further
                consultation, would really recommend
              </em>
            </h6>
            <p>✱ Results may vary person to person.</p>
            <h4>Naveen Kumar</h4>
            {/* <img src="https://picsum.photos/1200/400" /> */}
          </div>
          <div className="carousel-inner-1-main">
            <h6>
              <em>
                They have best of the machine for laser hair removal as it gave
                me results in 3 sittings, I was very frustrated because I took
                previous treatment from some other laser center and with no
                results,in this clinic my treatment was totally painless.thanks
                Dr.suruchi puri for best technology and treatment.
              </em>
            </h6>
            <p>✱ Results may vary person to person.</p>
            <h4>Naveen Kumar</h4>
            {/* <img src="https://picsum.photos/1200/400" /> */}
          </div>
          <div className="carousel-inner-1-main">
            <h6>
              <em>
                Good work and results of my laser hair removal , pretty
                satisfied, thank you Doctor . I was recommended by my sister
              </em>
            </h6>
            <p>✱ Results may vary person to person.</p>
            <h4>Naveen Kumar</h4>
            {/* <img src="https://picsum.photos/1200/400" /> */}
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Testimonial;
