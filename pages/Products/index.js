import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Layout from "../../Components/Layout";
import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://cms.maitretech.com/alayza/items/products?fields=*.*"
    );
    const data3 = await response.json();

    return {
      props: {
        data3,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data3: null,
      },
    };
  }
}

const Products = ({ data3 }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (data3 && data3.data) {
      setProduct(data3.data);
    }
  }, [data3]);

  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <h1>Products</h1>
      </div>
      <div className="products-main-1">
        {product.length > 0 ? (
          product.map((item) => (
            <ul className="cards" key={item.id}>
              <Link href={`Products/${item.id}`}>
                <div className="card">
                  <div className="card_image">         
                    <img
                      src={item?.image?.data?.full_url}
                      alt={item.name}
                      className="product-image"
                      style={{ height: "200px", objectFit: "fill" }} // Set a fixed height for the image box
                    />
                  </div>
                  <div className="card_content" style={{ height: "140px" }}> {/* Set a fixed height for the text box */}
                    {/* <h3>{item.brand}</h3> */}
                    <h2 className="card_title" style={{color:"#016b66"}}>{item.name}</h2>
                    <h5>{item.price}</h5>
                  </div>
                </div>
              </Link>
            </ul>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </Layout>
  );
};

export default Products;
