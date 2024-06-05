import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Router ,{useRouter} from "next/router";
// import prisma from "../../lib/prisma";
// import { useGlobalContext } from "../../Components/Context";

const Productdetails = ({ parsed }) => {
  const [data,setDate]=useState({})
const router = useRouter();
 const {Productdetails } = router.query;
 const id= Productdetails;
  // console.log(slug)
  useEffect(()=>{
    getDate()
  },[])
  const getDate = async()=>{
    try {
      const res = await fetch(`https://cms.maitretech.com/alayza/items/products/${id}?fields=*.*`)
      const data = await res.json()
      console.log(data)
      setDate(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {
        // setCart1({...cart1,parsed})
      }
      <Header />
      <section className="about-doctor">
        <div>
            <div  className="about-doctor-1">
              <div className="doctors-image">
                <img
                  src={data?.image?.data?.full_url}
                  alt="about"
                />
              </div>
              <div className="about-doctor-2">
               
                <h1>{data?.name}</h1>
                <p>{data?.price}</p>
                <p>{data?.description}</p>
              </div>
            </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Productdetails;

export async function getStaticPaths() {
  const response = await fetch('https://cms.maitretech.com//zebacms/items/products?fields=*.*') 
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

  const response = await fetch('https://cms.maitretech.com/zebacms/items/products/' + id + '?fields=.');

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