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
  const { cart1, setCart1 } = useGlobalContext();

  // console.log(data, "cart");

  const router = useRouter();

  const [localData, setLocalData] = useState([]);
  // const [data, setData] = useState();

  // const handleIncrement = (itemId) => {
  //   setLocalData(
  //     localData.map((item) => {
  //       if (item.id === itemId) {
  //         return { ...item, qty: item.qty + 1 };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  //   localStorage.setItem("cart-value", JSON.stringify(localData));
  // };
  // const handleDecrement = (itemId) => {
  //   setLocalData(
  //     localData.map((item) => {
  //       if (item.id === itemId && item.qty > 1) {
  //         return { ...item, qty: item.qty - 1 };
  //       } else {
  //         return item;
  //       }
  //     })
  //     );
  //     localStorage.setItem("cart-value", JSON.stringify(localData));
  // };

  // console.log(localData, "local");
  const handleDecrement = (item) => {
    const index = localData.findIndex((i) => i.id === item);
    const newItems = [...localData];
    const updatedItem = { ...newItems[index] };
    if (updatedItem.qty > 1) {
      updatedItem.qty--;
      newItems[index] = updatedItem;
      setLocalData(newItems);
      localStorage.setItem("cart-value", JSON.stringify(newItems));
    }
  };

  const handleIncrement = (item) => {
    const index = localData.findIndex((i) => i.id === item);
    const newItems = [...localData];
    const updatedItem = { ...newItems[index] };
    updatedItem.qty++;
    newItems[index] = updatedItem;
    setLocalData(newItems);
    localStorage.setItem("cart-value", JSON.stringify(newItems));
    // console.log(item, "item");
  };

  const getTotalAmount = () => {
    return localData?.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  };

  useEffect(() => {
    const totalAmount = getTotalAmount();
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
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
    setLocalData(data2);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  useEffect(()=>{
    localStorage.setItem('items', sum)
    const dataSum = localStorage.getItem('items');
    setCart1(dataSum);
  },[sum])


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
                    <button
                    className="cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                  </div>
                  
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
