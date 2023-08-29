import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Gallery = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://cms.maitretech.com/zebacms/items/gallery?fields=*.*.*');
      const jsonData = await response.json();

      const imageUrls = jsonData.data[0].gallery_images.map((item) => item.directus_files_id.data.full_url);

      setData(imageUrls);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="gallery-main">
        <Header />
        <div className="about-header">
          <h1>Gallery</h1>
          <p>Dr. Zeba Quadiri</p>
        </div>
        <div className="gallery-div">
          {data.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              // style={{ height: "300px", width: "25%" }}
            />
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
