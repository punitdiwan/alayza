import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";

function Carousel1() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/zebacms/items/slider?fields=*.*.*"
      );
      const jsonData = await response.json();
      console.log("Fetched data:", jsonData);

      const sliderImages = jsonData?.data?.[0]?.slider_images;
      if (sliderImages) {
        const imageUrls = sliderImages.map(
          (item) => item.directus_files_id.data.full_url
        );
        setData(imageUrls);
      } else {
        console.error("Slider images not found in response data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel fade>
      {data?.map((item, index) => (
        <Carousel.Item key={index} className="carousel_image_new">
          <img
            className="d-block w-100"
            src={item}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel1;
