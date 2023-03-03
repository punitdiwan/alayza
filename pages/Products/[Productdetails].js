import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { FaRegStar } from "react-icons/fa";
import Router from "next/router";
import { productData } from "./index";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useRouter } from 'next/router'

const Productdetails = () => {


  const [data, setData] = useState(null);

  const router = useRouter()
  const id = router.query.Productdetails
  console.log(id,"querryyyyy");



  // console.log(data3)
  const [cart, setCart] = useState(0);

  const fetchProducts = async () => {
    const response = await fetch(`/api/products/${prod_id}`);
    const data1 = await response.json();
    setData(data1)
    console.log(data1,"dfjgfhsgdhfg")
  };

  useEffect(() => {
    fetchProducts();
  }, []);




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
            {/* <h1>{data.title}</h1> */}
            <p>
              <FaRegStar /> <FaRegStar />
              <FaRegStar /> <FaRegStar />
              <FaRegStar /> 5 Reviews
            </p>
            {/* <p>{data1.price} </p> */}
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
              Qty: <input type="number" />
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
  const prisma = new PrismaClient();
  const productData1 = await prisma.product.findMany();

  // const productData1 = productData;
  const paths = productData1.map((item) => {
    return {
      params: { Productdetails: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const prisma = new PrismaClient();
  const id = context.params.Productdetails;
  // const data1 = productData[id];



  const data1 = prisma.product.findUnique({
    where: {
      prod_id: String(id),
    },
  });


  const data2 = JSON.stringify(data1);
  const data3 = JSON.parse(data2) 

  return {
    props: {
      data3,
    },
  };
}
