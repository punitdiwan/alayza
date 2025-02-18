import React, { useEffect, useState } from "react";
// import "./styles.css";
// import YoutubeEmbed from "./YoutubeEmbed";
import Link from "next/link";

export default function Youtube() {
  const [data, setData] = useState()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {

    const response = await fetch('https://cms.maitretech.com/alayza/items/products?fields=*.*') 
    const data1 = await response.json()

    setData(data1?.data)
  }


  return (
    <>
      <section className="youtube-main">
        <div className="product-1">
          {/* <p>Good at work</p> */}
          <h1>Our Products</h1>
          <img src="./images/heading-art-01.svg" />
        </div>

        <div className="products-main-1">
          {
            
            data?.slice(0,4).map((item) => {
              return (<>
                <ul className="cards" key={item.id}>
                  {/* {console.log(item.prod_id)} */}
                  <Link className="cards_item" href={`Products/${item.id}`}>
                    <div className="card">
                      <div className="card_image">
                        <img src={item.image?.data?.full_url}
                        style={{ height: "200px", objectFit: "fill" }} />
                      </div>
                      <div className="card_content" style={{ height: "150px" }}>
                        <h3>{item.brand}</h3>
                        <h2 className="card_title" style={{color:"#016b66"}}>{item.name}</h2>
                        <h5> {item.price}</h5>
                      </div>
                    </div>
                  </Link>
                </ul>
              </>)
            })
          }

        </div>
        <Link href="/Products" className="btn-grad" style={{ width: "300px" }}>
          View All
        </Link>
      </section>
    </>
  );
}
