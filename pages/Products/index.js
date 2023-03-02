import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Layout from "../../Components/Layout";
// import { PrismaClient } from "@prisma/client";

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const data1 = await prisma.product.findMany();
//   const data2 = JSON.stringify(data1);
//   const data3 = JSON.parse(data2);

//   return {
//     props: {
//       data3,
//     },
//   };
// }

const Products = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/product");
      const data1 = await response.json();
      // console.log(data1.data)
      setData(data1.data);
    };
    fetchProducts();
  }, []);

  console.log(data, "dataaaaaaaaaa");

  // fetchProducts();

  return (
    <>
      {/* {
      data?.map((item)=>{
        return(
          <div>
            {item.id}
          </div>
        )
      })
    } */}
      <Layout>
        <section className="products-main">
          <Carousel
            className="products-carousel"
            autoPlay={true}
            indicators={false}
          >
            <Carousel.Item className="carousel_image_new">
              <img
                className="d-block w-30 center"
                src="./images/alexa.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel_image_new">
              <img
                className="d-block w-30"
                src="./images/airpods.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="carousel_image_new">
              <img
                className="d-block w-30"
                src="https://picsum.photos/0/"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="products-main-1">
            {/* <button onClick={fetchProducts}>Click</button> */}
            {/* {data?.map((item) => {
              return (
                <ul className="cards" key={item.id}>
                  <Link className="cards_item" href={`Products/${item.id}`}>
                    <div className="card">
                      <div className="card_image">
                        <img src={item.img} />
                      </div>
                      <div className="card_content">
                        <h2 className="card_title">{item.title}</h2>
                        <p className="card_text">
                          <FaRegStar /> <FaRegStar /> <FaRegStar />
                          <FaRegStar />
                          <FaRegStar /> {item.rating} Reviews
                        </p>
                        <h5>{item.price}</h5>
                      </div>
                    </div>
                  </Link>
                </ul>
              );
            })} */}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;

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
