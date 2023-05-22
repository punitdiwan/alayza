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
          <img   src="./images/heading-art-01.svg" />
          <p style={{ width: "70%" }}>
            188,Sangam Vihar Colony,Near Awas Vikas Jhansi,U.P - 284003
          </p>
          <p>Email: zebdermm@gmail.com</p>
          <p>Call : +91 - 7317618333</p>
        </div>
        <div className="contact-us-inner-1" style={{ margin: "5px 10px" }}>
          <h3>Online payment</h3>
          <img src="./images/heading-art-01.svg" />
          <img src="./images/Qrcode.v2.png" className="qr" /> <br/>
          <p>Name :H S S KAY ENTERPRISES</p>
          <p>UPI ID : zeba.quadiri19-2@oksbi</p>

          <button className="btn btn-primary px-5">Scan QR Code</button>
        <img src="./images/Dhan.jpeg" alt="Dhan"style={{opacity : "0.04",width : "300px" , position : "absolute" }}/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.144018880672!2d78.5177654554199!3d25.453771600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397771bea8006d11%3A0x1c6c1e536b1e7e29!2sZebdermm!5e0!3m2!1sen!2sin!4v1683024166510!5m2!1sen!2sin" width="600" height="450" style={ {border:"0px solid black", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>      </div>
      <Footer />
    </>
  );
};

export default Contactus;
