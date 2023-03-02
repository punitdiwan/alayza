import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Router from "next/router";
import Link from "next/link";
import { nanoid } from 'nanoid'



const Addproduct = () => {
  // const [product, setproduct] = useState("");

  const [data, setData] = useState({
    prod_id : nanoid(),
    name: "",
    price: "",
    brand: "",
    category: "",
    description: "",
  });


  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
    const response = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });


    
   

  };


  return (
    <>
      <Header />
      <section className="add-product-main">
        <button
          onClick={() => Router.back()}
          className="global-btn"
          style={{ marginLeft: "10%", marginTop: "1rem" }}
        >
          {" "}
          Go back
        </button>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="file"
            placeholder="Image URL"
            name="file"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            className="login-btn"
            style={{ margin: "0.3rem" }}
            onClick={submitData}
          >
            Create Product
          </button>
          {/* href="Admin/AdminProducts" */}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Addproduct;
