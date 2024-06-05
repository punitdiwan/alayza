import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import jwt from "jsonwebtoken";
// import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
// import { useGlobalContext } from "../Components/Context";

const Placeorder = () => {
  const [data, setData] = useState();
  const [amount, setAmount] = useState();
  const [addressData, setAddressData] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      router.push("/Login");
      // setValidate(true);
    }
  }, []);
  const router = useRouter();

  useEffect(() => {
    const prodData = localStorage.getItem("cart-value");
    const totalAmount = localStorage.getItem("totalAmount");
    const address = localStorage.getItem("addressData");
    const token = localStorage.getItem("Token");
    var user = jwt.decode(token);
    setUser(user);
    setAddressData(JSON.parse(address));
    setAmount(totalAmount);
    setData(JSON.parse(prodData));
  }, []);

  let dataNew = data?.map((item) => {
    let newObj = {
      prod_id: item.prod_id,
      qty: item.qty,
      amount: item.price,
      created_at : item.created_at
    };
    return newObj;
  });
  const orderDate = data?.map((item)=>item.created_at.slice(0,10)) 

  // console.log(orderDate, "sdhfg");

  let total = +amount + 50 + 18;

  // console.log(dataNew, "datatatata");
  const handleSubmit = async () => {
    const response = await fetch("/api/Orders", {
      method: "POST",
      body: JSON.stringify({ dataNew, total, user,orderDate }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("cart-value");
    localStorage.removeItem("addressData");
    localStorage.removeItem("totalAmount");
    localStorage.removeItem("items");
  };

  return (
    <>
      <Header />
      <section className="place-order-main">
        <div className="place-order-2">
          <div>
            <h3>Shipping</h3>
            <p>Address: {addressData?.address}</p>
          </div>
          <hr />
          <div>
            <h3>Payment Method</h3>
            <p>Method: PayPal</p>
          </div>
          <hr />
          <div className="order-main-1">
            <h3>Cart Items</h3>
            {data?.map((item) => {
              return (
                <div className="place-order-inner">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <div>
                    <p>
                      {item.qty} x {item.price} = {item.qty * item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="products-detail-page-inner-2">
          <h3>Order Summary</h3>
          <p>Subtotal ₹{amount}</p>
          <p>Shipping ₹50.00</p>
          <p>Tax ₹18.00</p>
          <p>Total ₹{total}</p>
          <Link
            href="/Myorder"
            type="button"
            className="btn-grad"
            style={{
              width: "95%",

              color: "black",
            }}
            onClick={handleSubmit}
          >
            Place Order
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Placeorder;
