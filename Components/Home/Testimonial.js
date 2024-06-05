import React,{useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Testimonial = () => {

  const [data, setData] = useState()


  const getDirectorData = async () => {
    const response = await fetch('https://cms.maitretech.com//zebacms/items/testimonials?fields=*.*')
    const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    getDirectorData()
  }, [])

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
          {
            Array.isArray(data) && data.length > 0 && data?.map((item) => {
              return (
                <div>
                  <h6>{item.testimonial_data}</h6>
                  <p>✱ Results may vary person to person.</p>
                  <h4>{item.testimonial_name}</h4>
                </div>
              )
            })
          }
        </Carousel>
      </section>
    </>
  );
};

export default Testimonial;





