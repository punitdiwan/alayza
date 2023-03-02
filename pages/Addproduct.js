import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Router from "next/router";
import Link from "next/link";

const Addproduct = () => {
  // const [product, setproduct] = useState("");

  const [product, setProduct] = useState({
    name: "",
    number: "",
    brand: "",
    category: "",
    description: "",
  });

  // console.log(data);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
    const response = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-Type": "application/json",
      },
    });


    
    setProduct({
      name: "",
      number: "",
      brand: "",
      category: "",
      description: "",
    }
    )

    const data = await response.json();
    console.log(data);
  };

  console.log(product, "productssssss");

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
            name="number"
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
            Update Product
          </button>
          {/* href="Admin/AdminProducts" */}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Addproduct;
