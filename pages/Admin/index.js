

import Products from "../Products";
import React, { useEffect, useState } from "react";


export async function getStaticProps() {
  const data = productData;
  return {
    props: {
      data,
    },
  };
}

const index = ({ data }) => {


  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      router.push("/Login")
    }
    // setToken1(token)
  }, []);



  return (
    <>
      <Products data={data} />
    </>
  );
};

export default index;

export const productData = [
  {
    id: 0,
    img: "./images/airpods.jpg",
    title: " Airpods Wireless Bluetooth Headphones",
    rating: "1",
    price: "₹2,495.00",
  },
  {
    id: 1,
    img: "./images/phone.jpg",
    title: " IPhone 11 Pro 256GB Memory",
    rating: "4",
    price: "₹1,949.00",
  },
  {
    id: 2,
    img: "./images/camera.jpg",
    title: " Cannon EOS 80D DSLR Camera",
    rating: "6",
    price: "₹92,500.00",
  },
  {
    id: 3,
    img: "./images/camera.jpg",
    title: "Cannon EOS 80D DSLR Camera ",
    rating: "2",
    price: "₹24,500.00",
  },
  {
    id: 4,
    img: "./images/mouse.jpg",
    title: "Logitech G-Series Gaming Mouse ",
    rating: "4",
    price: "₹92,500.00",
  },
  {
    id: 5,
    img: "./images/alexa.jpg",
    title: " Amazon Echo Dot 3rd Generation",
    rating: "5",
    price: "₹49,990.00",
  },
];
