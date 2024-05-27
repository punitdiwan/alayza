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
        <p>Alayza life science / Contact Us</p>
      </div>
      {/* <Form/> */}
      <div className="contact-us-clinic">
        <div className="contact-us-inner" style={{ margin: "0 auto" }}>
          <h1>Office Address</h1>
          <img   src="./images/heading-art-01.svg" />
          <p style={{ width: "70%" }}>
          Address :MIG-57, Kotra Sultanabad, Near May Flower Public School, Bhopal 462003 (M.P.)</p>
          <p>Email: infoatalayza@gmail.com</p>
          <p>Call : +91 - 7554149740</p>
        </div>
        {/* <div className="contact-us-inner-1" style={{ margin: "5px 10px" }}>
          <h3>Online payment</h3>
          <img src="./images/heading-art-01.svg" />
          <img src="./images/new-qr.jpeg" className="qr" /> <br/>
          <p>Name :H S S KAY ENTERPRISES</p>
          <p>UPI ID : zeba.quadiri19-2@oksbi</p>

          <button className="btn btn-primary px-5">Scan QR Code</button>
        <img src="./images/Dhan.jpeg" alt="Dhan"style={{opacity : "0.04",width : "300px" , position : "absolute" }}/>
        </div> */}

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770.8181679022861!2d77.39586904298832!3d23.219429849442708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42c37bbdf3bf%3A0x8488d758a0e7cf13!2sMay%20Flower%20Public%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1715621339826!5m2!1sen!2sin" width="600" height="450" style={ {border:"0px solid black", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>       */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.648196611085!2d77.3966627!3d23.2194882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42c314db7b17%3A0x4a398584822597bb!2s57%2C%20MIG%20Ln%2C%20Chitragupt%20Nagar%2C%20Kotra%20Sultanabad%2C%20Bhopal%2C%20Madhya%20Pradesh%20462003!5e0!3m2!1sen!2sin!4v1715971630351!5m2!1sen!2sin" width="600" height="450" style={ {border:"0px solid black", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

        </div>
      <Footer />
    </>
  );
};

export default Contactus;
