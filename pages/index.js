import React, { useEffect } from "react";
import Header from "../Components/Header";
import Carousel1 from "../Components/Home/Carousel";
import Blogcard from "../Components/Blogs/Index";
import Dermatologistservice from "../Components/Home/Dermatologistservice";
import Meet from "../Components/Home/Meet";
import Ourresults from "../Components/Home/Ourresults";
import Youtube from "../Components/Home/Youtube";
import Form from "../Components/Home/Form";
import Testimonial from "../Components/Home/Testimonial";
import Homecard from "../Components/Home/Homecard";
import Footer from "../Components/Footer";
import Greadcard from "../Components/Greadcard";


export default function Home() {
  return (
    <>
      <Header />
      <Carousel1 />
      {/* <div className="product-1">
           
           <h1 style={{color:'#005392',marginLeft:725,marginTop:30}}>Blog</h1>
           <img style={{marginLeft:670}} src="./images/heading-art-01.svg" />
         </div> */}
   
      {/* <Meet /> */}
      {/* <Ourresults /> */}
      <Greadcard/>
      <Youtube />
      {/* <Form /> */}
      {/* <Testimonial /> */}
      {/* <Homecard /> */}
      <Blogcard/>
      <Dermatologistservice />
      
      <Footer />
    </>
  );
}
