import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useQuery } from "graphql-hooks";
import * as constants from "../Components/Contants";

const Gallery = () => {

    const { data } = useQuery(constants.Gallery)

    return (
        <>
            <section className="gallery-main">
                <Header />
                <div className="about-header">
                    <h1>Gallery</h1>
                    <p>Dr. Suruchi Puri / Gallery</p>
                </div>
                <div className="gallery-div">
                    {/* {
                  data.map((item) => {
                      return (
                          <div  key={item.id}>
                              <img src={ item.img} />
                          </div>
                      )
                  })
              } */}

                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[0].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[1].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[2].Gallery_image?.id}`}

                    />

                </div>
                <div className="gallery-div">
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[3].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[4].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[5].Gallery_image?.id}`}

                    />

                </div>

                <div className="gallery-div">
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[6].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[7].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[8].Gallery_image?.id}`}

                    />

                </div>

                <div className="gallery-div">
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[9].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[10].Gallery_image?.id}`}

                    />
                    <img

                        src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Gallery[11].Gallery_image?.id}`}

                    />

                </div>
                <Footer />

            </section>
        </>
    );
};

export default Gallery;


// export const data = [
//     {
//         img: "./images/gallery-1.jpeg"
//     },
//     {
//         img: "./images/gallery-2.jpeg"
//     },
//     {
//         img: "./images/gallery-3.jpeg"
//     },
//     {
//         img: "./images/gallery-4.jpeg"
//     },
//     {
//         img: "./images/tattoo-1.jpeg"
//     },
//     {
//         img: "./images/intense-pulse.jpeg"
//     },
//     {
//         img: "./images/laser.jpeg"
//     },
//     {
//         img: "./images/about-zeba.jpeg"
//     },
//     {
//         img: "./images/acne.jpeg"
//     },
//     {
//         img: "./images/dr-zeba.jpeg"
//     },
//     {
//         img: "./images/hair-pro-1.jpeg"
//     },
//     {
//         img: "./images/switch.jpeg"
//     }
// ] 
