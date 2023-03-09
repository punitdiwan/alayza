import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Router from "next/router";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

const Addproduct = () => {
  // const router = useRouter();
  // console.log(router.query);

  const [prodData, setProdData] = useState("");

  const [data, setData] = useState({
    prod_id: nanoid(),
    image: "",
    name: "",
    price: "",
    brand: "",
    category: "",
    description: "",
    qty: 1,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(data,"add-data");

  const submitData = async () => {
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const fetchProducts = async () => {
    const response = await fetch(`api/products`);
    const productData = await response.json();
    // console.log(productData, "Data from API response");
    setProdData(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="add-product-main">
        <button
          onClick={() => Router.back()}
          className="global-btn"
          style={{ marginLeft: "10%", marginTop: "1rem" }}
        >
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
          <Link
            href="Admin/AdminProduct"
            className="login-btn"
            style={{ margin: "0.3rem" }}
            onClick={submitData}
          >
            Create Product
          </Link>
          {/* href="Admin/AdminProducts" */}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Addproduct;
