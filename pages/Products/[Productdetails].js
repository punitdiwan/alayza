import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Router, { useRouter } from "next/router";

const Productdetails = ({ parsed }) => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { Productdetails } = router.query;
  const id = Productdetails;

  useEffect(() => {
    if (id) {
      getDate();
    }
  }, [id]);

  const getDate = async () => {
    try {
      const res = await fetch(
        `https://cms.maitretech.com/alayza/items/products/${id}?fields=*.*`
      );
      const result = await res.json();
      if (result?.data) {
        setData(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Data:", data); // Log data for debugging

  return (
    <>
      <Header />
      <section className="about-doctor">
        <div>
          <div className="about-doctor-1">
            <div className="doctors-image">
              <img src={data?.image?.data?.full_url} alt="about" />
            </div>
            <div className="about-doctor-2">
              <h1>{data?.name}</h1>
              <p>{data?.price}</p>
              
              {/* Render description paragraph using a div with white-space: pre-line */}
              <div style={{ whiteSpace: "pre-line" }}>{data?.description}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productdetails;
