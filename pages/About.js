import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Weoffer from "../Components/About clinic/Weoffer";
import Clinictiming from "../Components/About clinic/Clinictiming";
import Testimonial from "../Components/Home/Testimonial";

const About = () => {
  return (
    <>
      <section className="about-main">
        <Header />
        <div className="about-header">
          <h1>Vision</h1>
          <p>Alayza life science</p>
        </div>
        <Weoffer />
        <Clinictiming />
        {/* <Testimonial /> */}
        <Footer />
      </section>
    </>
  );
};

export default About;
