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
          <h1>About Doctor</h1>
          <p>Dr. Zeba Quadiri / About Doctor</p>
              </div>
              <Aboutdoctor/>

        <Footer />
      </section>
    </>
  );
};

export default Aboutdr;
