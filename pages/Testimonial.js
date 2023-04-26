import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useQuery } from "graphql-hooks";
import * as constants from "../Components/Contants";

const Testimonial = () => {
  const { data } = useQuery(constants.testimonial);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Header />

      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "auto",
          paddingTop: "1.5rem",
          paddingLeft: "4rem",
          overflow: "hidden",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "1.5rem" }}>
          OUR Testimonials
        </h1>
      </div>

      {/* <div
        className="cardslidersetup "
        style={{ backgroundColor: "lightgray", padding: "2rem" }}
      > */}
              <div className="jkl">
                  {
                      data?.Testimonials?.map((item)=>{
                        return(<>
                         <div className="jkl1" style={{ backgroundColor: "white" }} key={item.id}>
                            <p>{item.testimonial_data}</p>
                         <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}>
                         <h6 style={{ margin: "1rem", textAlign: "right" }}>{item.testimonial_name}</h6>

                         </div>

                         </div>
                        </>)
                      })
                  }
        </div>
        {/* <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              I was very disturbed cause of my red cheeks , burning ,whenever I
              was exposed to sunlight, change of temperature, cold weather. I
              took homeopathic medicines from Dr. Zeba and to my surprise it
              started affecting me from day one , now i can go out freely. I am
              very thankful to homeopathy.
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Khairon</h6>
            </div>
          </div> */}

          {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              Thankyou Dr. Zeba Mam and homeopathy for treating me for alopecia
              . As a 11 year old kid i have lost all my confidence cause of this
              disease. Thankyou for helping me live with great confidence and
              also for your motivating words.
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Ridhima</h6>
            </div>
          </div> */}
{/* 
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              Thankyou Dr. Zeba Quadiri and homeopathy for helping me fixing my
              hormonal disorder and also in my weight loss I was facing this
              issue of hormonal imbalance. which eas a major cause of my massive
              weight gaince since 8-10years. consulted so many gynaecologists
              but all in vain I lost all hope. It was all possible only because
              of you Thankyou so much for helping me get wht I dreamt of.
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Parul</h6>
            </div>
          </div>
        </div> */}

        {/* <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              This testimonial is long overdue. I met Dr Zeba in the year 2018
              when I was suffering with multiple issues such as hair loss , pcos
              , hormonal imbalance, mood swings. facial hair and what not . It
              was fruastating and irritating because dealing with such issues
              was pushing me towards the brink of depression , but you are a
              life saver Dr Zeba a friend a mentor and a guide to me your
              amazing and accurate diagonosis and treatment helped me to
              overcome day to day struggle of mood swings , overcoming physical
              ailments and enlightening me with positive approach to life you
              are a true life saver.
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}
{/* 
              <h6 style={{ margin: "1rem", textAlign: "right" }}>shreya</h6>
            </div>
          </div> */}

          {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              Dr Zeba Quadiri online consultation popped up as a blessing to me
              on instagarm , i am a patient of severe acne breakouts and oily
              skin , I have been on several medications for quite long but
              nothing helped . Zebdermm's medicine and skin care products worked
              tremendously not only it cleared my acne but also balanced oil on
              my face. All this happened from the comfort of my home. I
              consulted online and whole therpapy was delivered at my doorstep .
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Naaz</h6>
            </div>
          </div> */}

          {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              Homeoeopathic medicines works like magic on my damaged skin , I
              was suffering with burning redness and itching on my face
              everytime l am exposed to sunlight and heat . Taking medicines
              from Zebdermm Wellness reduced redness of face and itching and
              buring has completely gone . just in 4 days Thanks to Dr. Zeba and
              homeopathy . now I can Freely step out .
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Zainab bi</h6>
            </div>
          </div>
        </div> */}

        {/* <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              My pigmentation has reduced drastically within the time period of
              7-8 month . I thank Khatoon Beauty clinic and esp Dr. Zeba that
              their treatment and products have shown such a great effect on my
              skin thankyou .
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>
                Zehra Batool{" "}
              </h6>
            </div>
          </div> */}

          {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              {" "}
              my skin has lightened up a lot skintone has evened out and sun its
              no longer a trouble I can step out in the sun without being
              worried for sun tan and sensitivity. Would like to thank
              zebdermmwllness and Fatima{" "}
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Maqsuma </h6>
            </div>
          </div> */}

          {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              I really want to thankyou mam cause my dark spots has reduced a
              lots and my skin is also better than before. The sunscreen you
              recommend me is amazing and suits my skin . Thankyou again mam
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Shenaz - </h6>
            </div>
          </div>
        </div> */}

        {/* <div className="jkl">
          <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              I am thankful to homeopathy and zebdermmwellness for treating
              eczema of my son. which he was suffering from a year. He is
              totally fine now thanks a lot and all the best wishes to Dr. Zeba
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Deepti</h6>
            </div>
          </div> */}

          {/* <div className="jkl1" style={{ backgroundColor: "white" }}>
            <p style={{ margin: "1rem" }}>
              {" "} */}
              {/* I applied some wrong creams thinking it will give me quick results
              which damaged my skin . Thankfully I consulted Dr. Zeba and now my
              skin issues got cured. Thanks to Dr. Zeba and ZebdermmWellness
            </p> */}
            {/* <button style={{ border: "none" }}>Read More</button> */}
            {/* <div style={{ display: "flex", width: "100%", marginLeft: "1rem" }}> */}
              {/* <img style={{ border: "2px solid white", borderRadius: "3rem", width: "3rem", height: '3rem' }} src="" alt="" /> */}

              {/* <h6 style={{ margin: "1rem", textAlign: "right" }}>Driti </h6>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Testimonial;
