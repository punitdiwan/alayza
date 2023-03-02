import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="footer-main">
        <div className="footer-inner">
          <h5>Dr. Zeba Quadiri</h5>
          <p>
            Dr. Zeba Quadiri is a renowned dermatologist and cosmetologist with
            vast experience in the field of cosmetic, Laser and Bridal
            Dermatology.
          </p>
          <button className="global-btn">Book an Appointment</button>
        </div>
        <div className="footer-inner">
          <h5>Useful Links</h5>
          <Link href="/">Home</Link>
          <Link href="/Aboutdr">About Doctor</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Results">Results</Link>
        </div>
        <div className="footer-inner">
          <h5>Our Premium Services</h5>
          <li>PRP Treatment For Hair Loss</li>
          <li>Hair Transplant</li>
          <li>Bridal Dermatology</li>
          <li>Laser Hair Reduction</li>
          <li>Vitiligo Surgery</li>
        </div>
        <div className="footer-inner footer-inner-1">
          <h5>Clinic Location</h5>
          <p>Hemu Kalani, Bairagarh, Bhopal, Madhya Pradesh 462030, India</p>
          <p>+91 7317618333</p>
          <p>zebdermm@gmail.com</p>
          <p>Find on Google Map</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
