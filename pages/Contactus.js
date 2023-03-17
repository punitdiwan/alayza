import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Form from "../Components/Home/Form";

const Contactus = () => {
  return (
    <>
      <Header />
      <div className="about-header">
        <h1>Contact Us </h1>
        <p>Dr. Zeba Quadiri / Contact Us</p>
      </div>
      <Form/>
      <div className="contact-us-clinic">
        <div className="contact-us-inner" style={{ margin: "0 auto" }}>
          <h1>Clinic Address</h1>
          <img src="./images/heading-art-01.svg" />
          <p style={{ width: "70%" }}>
            Hemu Kalani, Bairagarh, Bhopal, Madhya Pradesh 462030, India
          </p>
          <p>Email: zebdermm@gmail.com</p>
          <p>Call : +91 - 7317618333</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.1572325547063!2d77.34298231708183!3d23.27373587132669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67bdaf59b5af%3A0xf8d39d37fc7189ff!2sMaitretech!5e0!3m2!1sen!2sus!4v1677230846924!5m2!1sen!2sus"
          style={{ border: "5px solid #3795BD", padding: "1rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
