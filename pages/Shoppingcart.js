import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaTrash, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGlobalContext } from "../Components/Context";

// import { productData } from "./Products/index";

const Shoppingcart = () => {
  const { cart1, setCart1, data, setData } = useGlobalContext();

  // console.log(data, "cart");

  const router = useRouter();

  // const [items, setItems] = useState([
  //   { id: 1, name: "Item 1", price: 10, quantity: 1 },
  //   { id: 2, name: "Item 2", price: 20, quantity: 2 },
  //   { id: 3, name: "Item 3", price: 30, quantity: 3 },
  // ]);

  const [localData, setLocalData] = useState([]);
  // const [data, setData] = useState();

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
    localStorage.setItem("cart-value", JSON.stringify(localData));
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
      localStorage.setItem("cart-value", JSON.stringify(localData));
  };

  // console.log(localData, "local");
  // const handleDecrement = (item) => {
  //   const index = localData.findIndex((i) => i.id === item.id);
  //   const newItems = [...localData];
  //   const updatedItem = { ...newItems[index] };
  //   if (updatedItem.qty > 1) {
  //     updatedItem.qty--;
  //     newItems[index] = updatedItem;
  //     setLocalData(newItems);
  //     localStorage.setItem("cart-value", JSON.stringify(localData));
  //   }
  // };

  // const handleIncrement = (item) => {
  //   const index = localData.findIndex((i) => i.id === item.id);
  //   const newItems = [...localData];
  //   const updatedItem = { ...newItems[index] };
  //   updatedItem.qty++;
  //   newItems[index] = updatedItem;
  //   setLocalData(newItems);
  //   localStorage.setItem("cart-value", JSON.stringify(localData));
  // };

  const getTotalAmount = () => {
    return localData?.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  };

  useEffect(() => {
    const totalAmount = getTotalAmount();
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    // localStorage.setItem("cart-value", JSON.stringify(localData));
  }, [getTotalAmount]);

  //

  const removeFromCart = (id) => {
    const updatedData = localData.filter((item) => item.id !== id);
    localStorage.setItem("cart-value", JSON.stringify(updatedData));
    setLocalData(updatedData);
  };

  const fetchData = () => {
    const data1 = localStorage.getItem("cart-value");
    const data2 = JSON.parse(data1);
    // data2.push(localData)
    setLocalData(data2);
  };
  // localStorage.setItem("cart-value", JSON.stringify(localData));
  console.log(localData, "local-data");

  useEffect(() => {
    fetchData();
    // localStorage.setItem("cart-value", JSON.stringify(localData));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart-value", JSON.stringify(localData));
  // },[localData])

  const checkToken = () => {
    localStorage.setItem("cart-value", JSON.stringify(localData));
    const token = localStorage.getItem("Token");
    if (token) {
      router.push("/Shipping");
    } else {
      router.push("/Login");
    }
  };
  let quantity = localData?.map((item) => item.qty);
  let sum = quantity?.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);

  setCart1(sum);

  return (
    <>
      <Header cart={sum} />
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
                  <img src={item.image} />
                  <h5>{item.name}</h5>
                  <p>
                    {item.price} <FaTimes /> {item.qty} ={" "}
                    {item.price * item.qty}
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
          <h4>Subtotal ({sum}) Items</h4>
          <p>Price {getTotalAmount()} </p>
          <Link href="/Login" className="global-btn" onClick={checkToken}>
            Proceed to Checkout
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shoppingcart;
