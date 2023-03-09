import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaTrash, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";
// import { productData } from "./Products/index";

const Shoppingcart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 1 },
    { id: 2, name: "Item 2", price: 20, quantity: 2 },
    { id: 3, name: "Item 3", price: 30, quantity: 3 },
  ]);
  const [localData, setLocalData] = useState([]);

  const handleIncrement = (itemId) => {
    setLocalData(
      localData.map((item) => {
        if (item.id === itemId) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      })
    );
  };
  const handleDecrement = (itemId) => {
    setLocalData(
      localData.map((item) => {
        if (item.id === itemId && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      })
    );
  };
  const getTotalAmount = () => {
    return localData?.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  };
  const removeFromCart = (id) => {
    const updatedData = localData.filter((item) => item.id !== id);
    localStorage.setItem("cart-value", JSON.stringify(updatedData));
    setLocalData(updatedData);
  };

  const fetchData = () => {
    const data1 = localStorage.getItem("cart-value");
    const data2 = JSON.parse(data1);
    setLocalData(data2);
  };
  // console.log(localData, "local");

  useEffect(() => {
    fetchData();
  }, []);

  


  // useEffect(() => {
  //   localStorage.setItem("cart-value", JSON.stringify(localData));
  // },[localData])




  return (
    <>
      <Header cart={localData?.length} />
      <br />
        <button
        className="global-btn"
        onClick={() => Router.back()}
        style={{ marginLeft: "10%" }}
      >
        Go Back
      </button>
      <section className="shopping-cart-main">
        <div className="shopping-cart-1">
          <h2>Shopping Cart</h2>
          {localData?.map((item) => {
            return (
              <>
                <div className="shopping-cart-1-inner">
                  <img src="./images/mouse.jpg" />
                  <h5>{item.name}</h5>
                  <p>
                    {item.price} <FaTimes /> {item.qty}
                  </p>
                  <div className="cart-btn-div">
                    <button
                      className="cart-btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <FaPlus />
                    </button>
                    <button
                      className="cart-btn"
                      onClick={() => handleDecrement(item.id)}
                    >
                      <FaMinus />
                    </button>
                  </div>
                  <button
                    className="cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="shopping-cart-2">
          <h4>Subtotal ({localData?.length}) Items</h4>
          <p>Price {getTotalAmount()} </p>
          <Link href="/Login" className="global-btn">
            Proceed to Checkout
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shoppingcart;
