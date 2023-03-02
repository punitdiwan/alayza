import React from 'react';
import Header from "../Components/Header"; 
import Footer from '../Components/Footer';
import Treatmentsmain from '../Components/Treatments/Treatmentsmain';
import Acnetreatments from '../Components/Treatments/Acnetreatments';

const Treatments = () => {
  return (
      <>
          <section className="treatment-main">
              <Header />
              <div className="about-header">
          <h1>Treatments </h1>
          <p>Dr. Zeba Quadiri / Treatments</p>
              </div>
              <Treatmentsmain />
              <Acnetreatments/>
            <Footer/>
              
      </section>
      </>
  )
}

export default Treatments