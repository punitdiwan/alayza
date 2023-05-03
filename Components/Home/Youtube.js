import React, { useEffect,useState } from "react";
// import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Link from "next/link";

export default function Youtube() {
  const [data, setData] = useState()

  useEffect(()=>{
    fetchProducts()
  },[])

  const  fetchProducts = async( )=>{
    
    const response =  await fetch ("/api/products")
    
    const data1 = await response.json()
    
    setData(data1)
  }


  return (
    <>
      <section className="youtube-main">
        <div className="product-1">
          <p>Good at work</p>
          <h1>Our Products</h1>
          <img src="./images/heading-art-01.svg" />
        </div>
        
        <div className="App">
          {
              data?.map((item)=>{
                return(<>
                <YoutubeEmbed embedId={item.image} />
                </>)
              })
          }
        </div>
        <Link href="/Products" className="btn-grad" style={{width: "300px"}}>
          View All
        </Link>
      </section>
    </>
  );
}
