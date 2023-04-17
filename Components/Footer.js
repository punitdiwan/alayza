import React from "react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri"

const Footer = () => {
  return (
    <>
      <section className="footer-main">
        <div className="footer-inner">
          <h5>Dr. Zeba Quadiri</h5>
          <p>
            Dr. Zeba is a renowned and highly acclaimed homeopathic doctor and
            aesthetician, who has more than 15 years of experience.
          </p>
          <button className="btn-grad">Book an Appointment</button>
        </div>
        <div className="footer-inner">
          <h5>Useful Links</h5>
          <Link href="/">Home</Link>
          <Link href="/Aboutdr">About Doctor</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Results">Results</Link>
          <div>
            <Link href="https://www.facebook.com/dr.zebaquadir?mibextid=ZbWKwL" target="_blank"><img src="./images/Facebook_icon.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>



            <Link href="https://instagram.com/zebdermm?igshid=ZDdkNTZiNTM=" target="_blank"><img src="./images/Zeba_insta.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>



            <Link href="https://wa.me/c/917317618333" target="_blank"><img src="./images/whatsapp_Icon.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>
          </div>
          {/* <li style={{ height: "3rem", width: "3rem", marginTop: "0rem", alignItems: "center" }}>
            <a href="https://www.facebook.com/dr.zebaquadir?mibextid=ZbWKwL" target="_blank">
              <RiFacebookFill
                style={{
                  fontSize: "2rem",
                  width: "3rem",
                  height: "3rem",
                  padding: "0px",
                  margin: "10px",
                  color: "white"
                }}
              />
            </a>
            <a href="https://instagram.com/zebdermm?igshid=ZDdkNTZiNTM=" target="_blank">
              <RiInstagramFill
                style={{
                  fontSize: "2rem",
                  width: "3rem",
                  height: "3rem",
                  padding: "0px",
                  margin: "10px",
                  color: "white"
                }}
              />
            </a>
            <a href="https://wa.me/c/917317618333" target="_blank">
              <RiWhatsappFill
                style={{
                  fontSize: "2rem",
                  width: "3rem",
                  height: "3rem",
                  padding: "0px",
                  margin: "10px",
                  color: "white"
                }}
              />
            </a>
            
          </li> */}
        </div>
        <div className="footer-inner">
          <h5>Our Premium Services</h5>
          <Link href="/Treatments">Acne Treatment</Link>
          <Link href="/Treatments">
            Intense pulse Linkght treatment for rosacea
          </Link>
          <Link href="/Treatments">Photo Facial</Link>
          <Link href="/Treatments">Laser Hair Reduction</Link>
          <Link href="/Treatments">Tattoo Removal</Link>
          <Link href="/Treatments">Hydra facial</Link>
          <Link href="/Treatments">BB Glow Treatment </Link>


          <Link href="/Treatments">Radio Cautery - mole /wart/freckles removal</Link>
        </div>
        <div className="footer-inner footer-inner-1">
          <h5>Clinic Location</h5>
          <p>+91 7317618333</p>
          <p>zebdermm@gmail.com</p>
          <p>Find on Google Map</p>
        </div>
      </section>
    </>
  )
}

export default Footer;
