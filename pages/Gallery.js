import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useQuery } from "graphql-hooks";
import * as constants from "../Components/Contants";

const Gallery = () => {
  const { data } = useQuery(constants.Gallery);

  return (
    <>
      <section className="gallery-main">
        <Header />
        <div className="about-header">
          <h1>Gallery</h1>
          <p>Dr. Suruchi Puri / Gallery</p>
        </div>
        <div className="gallery-div">
          {data?.Gallery?.map((item) => {
            return (
              <>
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}assets/${item.Gallery_image.id}`}
                />
                {console.log(item.Gallery_image.id)}
              </>
            );
          })}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
