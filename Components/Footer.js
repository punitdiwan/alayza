import React from "react"
import Link from "next/link"
import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri"

const Footer = () => {
  return (
    
    <>
      <section className="footer-main">
        <div className="footer-inner">
          <h5>Alayza Life Science</h5>
          <p>
          Our Emphasis is on innovative natural supplements, which help you to get healthy life.
           We are committed to provide natural health supplements at aﬀordable prices to heal their lives.
           Our mission is to help people for doing more with Joy, they feel better and they live longer.
          </p>
          
          {/* <button className="btn-grad"><Link href="/Treatments">Book an Appointment</Link></button> */}
        </div>
        <div className="footer-inner">
          <h5>Useful Links</h5>
          <Link href="/">Home</Link>
          <Link href="/Aboutdr">About Company</Link>
          <Link href="/Products">Products</Link>
          <Link href="/Contactus">Contact Us</Link>
          <Link href="/Blogs">Blogs</Link>
          {/* <Link href="/Gallery">Gallery</Link>
          <Link href="/Results">Results</Link> */}
          {/* <div>
            <Link href="https://www.facebook.com/dr.zebaquadir?mibextid=ZbWKwL" target="_blank"><img src="/images/Facebook_icon.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>



            <Link href="https://instagram.com/zebdermm?igshid=ZDdkNTZiNTM=" target="_blank"><img src="/images/Instagram.png" height="50px" width="55px" style={{ marginLeft: "1rem" }} /></Link>



            <Link href="https://wa.me/c/917317618333" target="_blank"><img src="/images/whatsapp_Icon.png" height="50px" width="50px" style={{ marginLeft: "1rem" }} /></Link>
          </div> */}
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
          <h5>Our Premium Products</h5>
          <Link href="/Products">Alayrose Trio</Link>
          <Link href="/Products">
           Chrovit Tablets
          </Link>
          <Link href="/Products">Pregalay MNT</Link>
          <Link href="/Products">Boost Em Up</Link>
          <Link href="/Products">Alaycoxib-90</Link>
          {/* <Link href="/Products">Alaycoxib-th</Link> */}
        </div>
        <div className="footer-inner footer-inner-1">
          <h5>Office Location</h5>
          <p>Phone- +91 755-4149740</p>
          <p>E mail- infoatalayza@gmail.com</p>
          <Link href="/Contactus"><p style={{color : "#fff"}}>Find on Google Map</p></Link>
          <p> MIG-57, Kotra Sultanabad, Near May Flower Public School,Bhopal 462003 (M.P.)</p>
        </div>
      </section>
    </>
  )
}

export default Footer
