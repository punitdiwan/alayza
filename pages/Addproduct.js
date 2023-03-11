import React, { useState, useEffect } from "react";
import Header from "../Components/Admin/Header";
import Footer from "../Components/Footer";
import Router from "next/router";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

const Addproduct = () => {
  // const router = useRouter();
  // console.log(router.query);

  const [prodData, setProdData] = useState("");


  const categoryData = [
    {
    name: "cream",
    id:"1"
  },
  {
    name: "lotion",
    id:"2"
  },
  {
    name: "powder",
    id:"3"
  },
]

  const [data, setData] = useState({
    prod_id: nanoid(),
    image: "https://picsum.photos/200/300",
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
            name="image"
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
          <label >Category</label>
          <select onChange={(e) => {
                    handleChange(e);
                  }}  name="category" >
            {
              categoryData.map((item)=>{
                return(
                  <option value={item.name} key={item.id}  >{item.name}</option>

                )
              })
            }
            
            {/* <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option> */}
          </select>
          {/* <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => {
              handleChange(e);
            }}
          /> */}
          <input
            type="text-area"
            placeholder="Description"
            name="description"
            onChange={(e) => {
              handleChange(e);
            }}
          />

         {/* <textarea  rows="5" cols="60"  placeholder="Description"
            name="description"
            onChange={(e) => {
              handleChange(e);
            }} >
            </textarea> */}
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
