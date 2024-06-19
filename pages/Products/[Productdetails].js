import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useRouter } from "next/router";

const Productdetails = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { Productdetails: id } = router.query;

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://cms.maitretech.com/alayza/items/products/${id}?fields=*.*`
      );
      const result = await res.json();
      if (result?.data) {
        setData(result.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />       
      <section className="about-doctor">
        <div>
          <div className="about-doctor-1">
            <div className="doctors-image">
              <img src={data?.image?.data?.full_url} alt={data?.name || "about"} />
            </div>
            <div className="about-doctor-2">
              <h1 style={{color:"#016b66"}}>{data?.name}</h1>
              <h5 style={{ whiteSpace: "pre-line" }}>{data?.price}</h5>
              {/* Render HTML content */}
              <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productdetails;
