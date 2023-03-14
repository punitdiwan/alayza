import React from "react";
// import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Link from "next/link";

export default function Youtube() {
  return (
    <>
      <section className="youtube-main">
        <div className="product-1">
          <p>Good at work</p>
          <h1>Our Products</h1>
          <img src="./images/heading-art-01.svg" />
        </div>
        <div className="App">
          <YoutubeEmbed embedId="./images/product-1.jpeg" />
          <YoutubeEmbed embedId="./images/product-2.jpeg" />
          <YoutubeEmbed embedId="./images/product-3.jpeg" />
          <YoutubeEmbed embedId="./images/product-4.jpeg" />
          <YoutubeEmbed embedId="./images/product-5.jpeg" />
          <YoutubeEmbed embedId="./images/product-6.jpeg" />
        </div>
        <Link href="/Products" className="btn-grad" style={{width: "300px"}}>
          View All
        </Link>
      </section>
    </>
  );
}
