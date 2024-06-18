import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const Gallery = () => {
  const API_ENDPOINT = 'https://cms.maitretech.com/alayza/items/gallery?fields=*.*.*';
  const { data, error } = useSWR(API_ENDPOINT, fetcher);

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Error loading data</div>;
  }

  if (!data) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  const images = data.data;

  return (
    <>
      <style>{`
        .container-fluid {
          padding: 5px;
        }

        .first {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10px;
        }

        .one {
          width: 100%;
          height: 250px;
          margin: 10px;
        }

        .one img {
          height: 100%;
          width: 100%;
          object-fit: contain; /* Ensure entire image is visible without cropping */
          border: 2px solid #ddd;
          border-radius: 5px;
          padding: 5px;
        }

        @media screen and (max-width: 768px) {
          .first {
            grid-template-columns: 1fr;
          }

          .one {
            height: 400px;
            margin: 10px 0;
          }
        }
      `}</style>
      <div className="container-fluid">
        <Header />
        <div style={{ textAlign: 'center' }}>
          <h1>Gallery</h1>
        </div>
        <div className="first">
          {images.map((item, i) => (
            <div key={item.id || i} className="one">
              <a href={item?.images?.data?.full_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item?.images?.data?.full_url || 'fallback-image-url'}
                  className="imght"
                  alt={`Image ${i}`}
                />
              </a>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
