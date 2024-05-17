import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Aboutdoctor from '../Components/About doctor/Aboutdoctor';

const Aboutdr = () => {
  return (
    <>
      <section>
        <Header />
        <div className="about-header">
          <h1>About Company</h1>
          <p>Alayza life science </p>
              </div>
              <Aboutdoctor/>  

        <Footer />
      </section>
    </>
  );
};

export default Aboutdr;
