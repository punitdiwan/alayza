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
      const data = await res.json();
      setData(data.data);
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
              
              {/* Render description paragraph if data.description is available */}
              {data.description && (
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productdetails;
