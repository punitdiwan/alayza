import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "graphql-hooks";
import * as constants from "../Contants";
// import { useForm } from "react-hook-form";

function Carousel1() {

  const { data } = useQuery(constants.slider)

  // console.log(data, "Slider-daaataaaaa")

  // const { data } = useForm(constants.slider)
  return (
    <Carousel fade>
      <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100"
          src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Slider[0].Slider_images[0]?.directus_files_id?.id}`}
          alt="1st slide"
        />
        {/* <img
          className="d-block w-100 h-75"
          src="./images/hair_Zeba.png"
          alt="First slide"
        /> */}

      </Carousel.Item>
      <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100"
          src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Slider[0].Slider_images[1]?.directus_files_id?.id}`}
          alt="2nd slide"
        />
        {/* <img
          className="d-block w-100 h-75"
          src="./images/Zeba_1st.png"
          alt="Second slide"
        /> */}


      </Carousel.Item>
      <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100"
          src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Slider[0].Slider_images[2]?.directus_files_id?.id}`}
          alt="3rd slide"
        />
        {/* <img
          className="d-block w-100 h-75"
          src="./images/.jpeg"
          alt="Second slide"
        /> */}


      </Carousel.Item>

      <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100"
          src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Slider[0].Slider_images[3]?.directus_files_id?.id}`}
          alt="4th slide"
        />
        {/* <img
          className="d-block w-100 h-75"
          src="./images/Zeba1.png"
          alt="Second slide"
        /> */}


      </Carousel.Item>
      {/* <Carousel.Item className="carousel_image_new">
        <img
          className="d-block w-100"
          src={`http://0.0.0.0:8055/assets/${data?.Slider[0].Slider_images[4]?.directus_files_id?.id}`}
          alt="5TH slide"
        />
        


      </Carousel.Item> */}


    </Carousel>
  );
}

export default Carousel1;
