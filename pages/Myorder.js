import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaEdit, FaTrash, FaTimes, FaCheck } from "react-icons/fa";
import jwt from "jsonwebtoken";
// import {productData} from "./Products/index";

const Myorder = () => {
  const [data, setData] = useState();

  const fetchOrder = async () => {
    const token = localStorage.getItem("Token");

    const json = jwt.decode(token);

    const data = await fetch("/api/Orders");
    const res = await data.json();
    const newData = res.filter((item) => item.userId == json?.userId);
    setData(newData);
  };

  useEffect(() => {
    fetchOrder();
  }, []);


  // console.log(data,"userdata")

  return (
    <>
      <Header />
      <section className="order-main" style={{ textAlign: "center" }}>
        <h2
          style={{
            borderBottom: "2px solid #52BCC9",
            width: "fit-content",
            margin: "1rem",
          }}
        >
          My Orders
        </h2>
        <table className="table">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>ORDER ID</th>
              {/* <th>NAME</th> */}
              <th>PRICE</th>
              <th>PAID</th>
              <th>DELIVERED</th>
            </tr>
          </thead>
          {data?.length > 0
            ? data?.map((item) => {
                return (
                  <>
                    <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td>{item.orderId}</td>
                        {/* <td>{item.name}</td> */}
                        <td>{item.totalAmt}</td>
                        <td>
                          <FaCheck />
                        </td>
                        <td>
                          <FaTimes />
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </>
                );
              })
            : <td>you have no orders...</td>}
        </table>
      </section>
      <Footer />
    </>
  );
};

export default Myorder;
