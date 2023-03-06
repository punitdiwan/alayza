import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
// import { productData } from "../Products/index";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Link from "next/link";

const Products = () => {
  const [prodData, setProdData] = useState("");

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data1 = await response.json();
    setProdData(data1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      fetch(`/api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        fetchProducts();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const updatedData = {
  //   name : "Rahul Meena",
  //   price: 200
  // }

  const editProduct = async () => {
    // try {
    //   fetch(`/api/products/${143}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "PUT",
    //     body : JSON.stringify(updatedData)
    //   }).then(() => {
    //     fetchProducts();
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Header />
      <section className="Users-main">
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <h2>Products(2)</h2>
          <Link
            className="login-btn"
            href="/Addproduct"
            style={{ width: "20%" }}
          >
            Add Product
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTION</th>
            </tr>
          </thead>
          {Array.isArray(prodData)
            ? prodData?.map((item) => {
                return (
                  <>
                    <tbody style={{ textAlign: "center" }} key={item.id}>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <FaTimes />
                        </td>
                        <td>
                          <FaTimes />
                        </td>
                        <td>
                          <button
                            // href={`/Addproduct/${item.prod_id}`}
                            className="cart-btn"
                            onClick={() => editProduct(item.prod_id)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="cart-btn"
                            onClick={() => deleteProduct(item.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })
            : ""}
        </table>
      </section>
      <Footer />
    </>
  );
};

export default Products;
