import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Layout from "../../Components/Layout";
import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {


  const response = await fetch('https://cms.maitretech.com/alayza/items/products?fields=*.*')
  const data3 = await response.json()

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
    {
      name: "oil",
      id: "4",
    },
  ];


  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const [prodData, setProdData] = useState(data3);
  const [categoryData, setCategoryData] = useState(false);
  const [product,setPro] = useState([])

  // const filteredData = data3?.data?.filter(
  //   (item) => item?.category.toLowerCase() === categoryData?.category
  // );
  // if (categoryData?.category == "All") {
  //   setCategoryData(false);
  // }
  
  useEffect(()=>{
    getData()
  },[])
  const getData = async()=>{
    try {
      const res = await fetch('https://cms.maitretech.com/alayza/items/products?fields=*.*')
      const data = await res.json()
      setPro(data.data)
      console.log(data.data)
    } catch (error) {
      
    }
  }

  return (
    <>
      <Layout>
          <div className="products-main-1">
              {
                product.map((item)=>(
                  <ul className="cards" key={item.id}>
                    {/* {console.log(item.prod_id)} */}
                    <Link className="cards_item" href={`Products/${item.id}`}>
                      <div className="card">
                        <div className="card_image">
                          <img src={item?.image?.data?.full_url} />
                        </div>
                        <div className="card_content">
                          <h3>{item.brand}</h3>
                          <h2 className="card_title">{item.name}</h2>
                          <h5>RS {item.price}</h5>
                        </div>
                      </div>
                    </Link>
                  </ul>
                ))
              }
               
               

          </div>
        
      </Layout>
    </>
  );
};

export default Products;
