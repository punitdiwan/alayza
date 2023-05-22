import React,{useState,useEffect} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import { useQuery } from "graphql-hooks";
// import * as constants from "../Components/Contants";

const Gallery = () => {


  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/gallery?fields=*.*`);
      const jsonData = await response.json();

      const imageUrls = await Promise.all(jsonData.data[0].gallery_images.map(async (item) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_ASSETS}/${item.directus_files_id}`);
        const fileData = await response.json();
        return fileData.data.data;
      }));

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
          {data?.map((item) => {
            return (
              <>
                <img
                  src={item.full_url}
                  // key={item.Gallery_image.id}
                  // style={{ height: "300px", width: "25%" }}
                />
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

