import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Router from "next/router";
// import prisma from "../../lib/prisma";
// import { useGlobalContext } from "../../Components/Context";

const Productdetails = ({ parsed }) => {
  const setCartItem = () => {
    const id = parsed.id;
    var cartItems = JSON.parse(localStorage.getItem("cart-value") || "[]");
    // var cartItem = data; 

    const existingData = cartItems.find((item) => item.id === id);
    // const existingData = data.find((item) => item.id === id);


    if (existingData) {
      return existingData;
    } else {
      // setData([...data,parsed])
      cartItems.push(parsed);
      localStorage.setItem("cart-value", JSON.stringify(cartItems));
      return parsed;
    }
  };

  // console.log(parsed,"parsed")

  return (
    <>
      {
        // setCart1({...cart1,parsed})
      }
      <Header />
      <section className="products-details-main">
        <br />
        <button className="global-btn" onClick={() => Router.back()}>
          Go Back
        </button>
        <br />
        <br />
        <div className="products-detail-page">
          <img src={parsed?.data.product_image?.data?.full_url} alt="product" />
          <div className="products-detail-page-inner-1">
            <h1>{parsed?.data.product_name}</h1>
            {/* <p>
              <FaRegStar /> <FaRegStar />
              <FaRegStar /> <FaRegStar />
              <FaRegStar /> 5 Reviews
            </p> */}
            <p>Rs. {parsed?.data.product_price} </p>
            <p>
              {parsed?.data.description}
            </p>
          </div>
          <div className="products-detail-page-inner-2">
            <img src="/images/new-qr.jpeg" alt="" />

          </div>
          {/* <div className="products-detail-page-inner-2">
           
            <p>Status: In Stock</p>
            <p>Qty: 1</p>
            <Link
              href="/Shoppingcart"
              type="button"
              className="global-btn"
              style={{
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
              }}
              onClick={setCartItem}
            >
              Add To Cart
            </Link>

          </div> */}
          {/* ----------------------------QR payment--------------------- */}

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productdetails;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/products?fields=*.*`) 
  const data3 = await response.json()
  const paths = data3.data.map((item) => {
    return {
      params: { Productdetails: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  // const product = await prisma.product.findUnique({
  //   where: {
  //     id: parseInt(context.params.Productdetails),
  //   },
  // });

  const id = parseInt(context.params.Productdetails);

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/products/${id}?fields=*.*`) 
  const parsed = await response.json()
  

  // const data = JSON.stringify(product);
  // const parsed = JSON.parse(data);
  // console.log("djsfgsgfdjsgjfgdjsgfhsgjfgsfd");
  return {
    props: {
      parsed,
    },
    revalidate: 10,
  };
}
