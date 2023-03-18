import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Layout from "../../Components/Layout";
import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const data1 = await prisma.product.findMany();
  const data2 = JSON.stringify(data1);
  const data3 = JSON.parse(data2);

  console.log("revalidating");
  return {
    props: {
      data3,
    },
    revalidate: 10,
  };
}

const Products = ({ data3 }) => {
  const categoryData1 = [
    {
      name: "All",
      id: "0",
    },
    {
      name: "cream",
      id: "1",
    },
    {
      name: "lotion",
      id: "2",
    },
    {
      name: "powder",
      id: "3",
    },
  ];

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const [prodData, setProdData] = useState(data3);
  const [categoryData, setCategoryData] = useState(false);

  const filteredData = data3?.filter(
    (item) => item.category === categoryData?.category
  );
  if (categoryData?.category == "All") {
    setCategoryData(false);
  }

  return (
    <>
      <Layout>
        <section className="products-main">
          <div className="dropdown">
            <label>Category</label>
            <select
              onChange={(e) => {
                handleChange(e);
              }}
              name="category"
            >
              {categoryData1.map((item) => {
                return (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="products-main-1">
            {categoryData
              ? filteredData?.map((item) => {
                  return (
                    <ul className="cards" key={item.id}>
                      {/* {console.log(item.prod_id)} */}
                      <Link className="cards_item" href={`Products/${item.id}`}>
                        <div className="card">
                          <div className="card_image">
                            <img src={item.image} />
                          </div>
                          <div className="card_content">
                            <h3>{item.brand}</h3>
                            <h2 className="card_title">{item.name}</h2>
                            <h5>Rs. {item.price}</h5>
                          </div>
                        </div>
                      </Link>
                    </ul>
                  );
                })
              : prodData?.map((item) => {
                  return (
                    <ul className="cards" key={item.id}>
                      <Link className="cards_item" href={`Products/${item.id}`}>
                        <div className="card">
                          <div className="card_image">
                            <img src={item.image} />
                          </div>
                          <div className="card_content">
                            <h3>{item.brand}</h3>
                            <h2 className="card_title">{item.name}</h2>
                            <h5>Rs. {item.price}</h5>
                          </div>
                        </div>
                      </Link>
                    </ul>
                  );
                })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
