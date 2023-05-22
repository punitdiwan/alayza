import Carousel from "react-bootstrap/Carousel";
import React, {useState, useEffect} from "react"
// import { useQuery } from "graphql-hooks";
// import * as constants from "../Contants";
// import { useForm } from "react-hook-form";

function Carousel1() {


  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/slider?fields=*.*`);
      const jsonData = await response.json();

      const imageUrls = await Promise.all(jsonData.data[0].slider_images.map(async (item) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ASSETS}/${item.directus_files_id}`);
        const fileData = await response.json();
        return fileData.data.data;
      }));

      setData(imageUrls);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Carousel fade>
      {data?.map((item, index) => (
        <Carousel.Item key={index} className="carousel_image_new">
          <img className="d-block w-100" src={item.full_url} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel1;
