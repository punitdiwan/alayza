import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Results = () => {
  const [data, setData] = useState();

  const getDirectorData = async () => {
  //changes
  
    const NEXT_PUBLIC_URL =
      process.env.NEXT_PUBLIC_URL || "https://cms.maitretech.com/zebacms/items";
    const response = await fetch(`${NEXT_PUBLIC_URL}/results?fields=*.*`);

    const responseData = await response.json();
    setData(responseData.data);
  };

  useEffect(() => {
    getDirectorData();
  }, []);

  return (
    <>
      <Header />
      <div className="about-header" id="before-after">
        <h1>Before and Afters</h1>
        <p>Dr. Zeba Quadiri</p>
      </div>
      <section className="before-after-main">
        <div className="main">
          <ul className="cards-new-1 results">
            {data?.map((item) => (
              <li className="cards_item-1" key={item.id}>
                <div className="card_new-1">
                  <div className="card_image">
                    <img src={item.result_image?.data?.full_url} alt={item.result_name} />
                    <h6>{item.result_name}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Results;
