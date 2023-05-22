import React, { useState,useEffect } from "react";
import Form from "../Form";
// import { useQuery } from "graphql-hooks";
// import * as constants from "../../Components/Contants";

const Aboutdoctor = () => {



  const [data, setData] = useState()


  const getDirectorData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/about_doctor?fields=*.*`)
    const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    getDirectorData()
  }, [])




  // const { data } = useQuery(constants.about);

  return (
    <>
      <section className="about-doctor">
        <div className="about-doctor-1">
          <div className="doctors-image">
            <img
              src={data?.[0]?.doctor_image?.data?.full_url}
              alt="about"
            />
          </div>
          <div className="about-doctor-2">
            <p>AS THE DERMATOLOGIST FOR "FEMINA MISS INDIA", 2014</p>
            <h1>Dr. Zeba Quadiri</h1>
            <p>{data?.[0]?.doctor_para_1}</p>
          </div>
        </div>
        <div className="about-doctor-3">
          <Form />
          <div className="about-doctor-4">
            <p>{data?.[0]?.doctor_para_2}</p>
            <p>
              Ask almost any women/men and they will probably tell us that their
              relationship with skin and hair is similar to a love affair.
              Beautiful skin and hair is truly an obsession and often synonymous
              with identity in this modern day, glamour crazy and cosmetically
              conscious society.
            </p>
            <p>{data?.[0]?.doctor_para_3 }</p>
            <p>{data?.[0]?.doctor_para_4 }</p>
          </div>
        </div>
        <div className="about-doctor-5">
          <p>
            You will be surprised to see other patients and mostly we found our
            patients exchange their treatments experiences. Our patients are the
            best proof of our effective treatments. Skin rejuvenation treatments
            or plastic surgery procedures are not as expensive or complicate or
            painful as you may think it would be. With the modern technology and
            high tech equipments of today, you will need no time for healing and
            can go to your daily work or routine life after treatments.
          </p>
        </div>
        <div className="about-doctor-5">
          <p>
            Our treatments ranging from homeopathic medicines to deep skin
            rejuvenation of lontophoresis with a highly trained and friendly
            staffs with supervision of laser & other aesthetic treatments by
            Dr.Zeba Quadiri .Our treatments includes dermatologist cream,
            serum,face cleansers ,lotion and medication for the complete
            treatments for all skin type.Most common problems could be treated
            such as acne ,scars,hair treatments and inflammation of problems
            skin & hair.
          </p>
        </div>
      </section>
    </>
  );
};

export default Aboutdoctor;
