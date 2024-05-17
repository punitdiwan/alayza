import React, { useEffect } from "react";
import Header from "../Components/Header";
import Carousel1 from "../Components/Home/Carousel";
import Dermatologistservice from "../Components/Home/Dermatologistservice";
import Meet from "../Components/Home/Meet";
import Ourresults from "../Components/Home/Ourresults";
import Youtube from "../Components/Home/Youtube";
import Form from "../Components/Home/Form";
import Testimonial from "../Components/Home/Testimonial";
import Homecard from "../Components/Home/Homecard";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel1 />
      <Dermatologistservice />
      {/* <Meet /> */}
      {/* <Ourresults /> */}
      <Youtube />
      {/* <Form /> */}
      {/* <Testimonial /> */}
      {/* <Homecard /> */}
      <Footer />
    </>
  );
}
