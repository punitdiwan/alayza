import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { FaRegStar } from "react-icons/fa";
import Router from "next/router";
// import { productData } from "./index";
import Link from "next/link";
import prisma from "../../lib/prisma";

import { useRouter } from "next/router";

const Productdetails = ({ parsed }) => {
  // const [data, setData] = useState(null);

  // const router = useRouter()
  // const prod_id = router.query.Productdetails
  // console.log(prod_id,"querryyyyy");

  // console.log(data3)
  const [cart, setCart] = useState(0);

  // const fetchProducts = async () => {
  //   const response = await fetch(`/api/products/${prod_id}`);
  //   const data1 = await response.json();
  //   setData(data1)
  //   console.log(data1,"dfjgfhsgdhfg")
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  console.log(parsed, "slug-data");

  return (
    <>
      <section className="products-details-main">
        <Header cart={cart} />
        <br />
        <button className="global-btn" onClick={() => Router.back()}>
          Go Back
        </button>
        <br />
        <br />
        <div className="products-detail-page">
          {/* <img src={`.${data1.img}`} alt="product" /> */}
          <div className="products-detail-page-inner-1">
            <h1>{parsed.name}</h1>
            <p>
              <FaRegStar /> <FaRegStar />
              <FaRegStar /> <FaRegStar />
              <FaRegStar /> 5 Reviews
            </p>
            <p>Rs. {parsed.price} </p>
            <p>
              Description: Introducing the iPhone 11 Pro. A transformative
              triple-camera system that adds tons of capability without
              complexity. An unprecedented leap in battery life
            </p>
          </div>
          <div className="products-detail-page-inner-2">
            {/* <p>{data3.price}</p> */}
            <p>Status: In Stock</p>
            <p>
              Qty: <input type="number" value="1"/>
            </p>
            <Link
              href="/Shoppingcart"
              type="button"
              className="global-btn"
              style={{
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
              }}
              // onClick={validateUser}
            >
              Add To Cart
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productdetails;

export async function getStaticPaths() {
  const productData1 = await prisma.product.findMany();

  // const productData1 = productData;
  const paths = productData1.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const product = await prisma.product.findUnique({
    where: {
      // prod_id: String(context.params.id),
      id: parseInt(context.params.id)
    },
  });

  const data = JSON.stringify(product);
  const parsed = JSON.parse(data)
  console.log(data);
  return {
    props: {
      parsed,
    },
  };
}
