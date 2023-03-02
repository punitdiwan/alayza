import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Gallery = () => {
  return (
    <>
          <section classname="gallery-main">
            <Header/>
            <div className="about-header">
          <h1>Gallery</h1>
          <p>Dr. Suruchi Puri / Gallery</p>
              </div>
              <div className="gallery-div">
              {
                  data.map((item) => {
                      return (
                          <div  key={item.id}>
                              <img src={ item.img} />
                          </div>
                      )
                  })
              }
              </div>
              <Footer/>
              
      </section>
    </>
  );
};

export default Gallery;


export const data = [
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    },
    {
        img: "https://picsum.photos/200/300"
    }
] 
