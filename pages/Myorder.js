import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaEdit, FaTrash, FaTimes, FaCheck } from "react-icons/fa";
import jwt from "jsonwebtoken";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import {productData} from "./Products/index";

const Myorder = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [data, setData] = useState();
  const [orderData, setOrderData] = useState();

  // console.log(data?.id, "data");

  const orderDetails = async (id) => {
    console.log(id);
    const data1 = await fetch(`/api/Orders/${id}`);
    const res = await data1.json();
    setOrderData(res);
    console.log(res, "dtaa");
    setShow(true);

    // const newData = res.filter((item) => item.userId == json?.userId);
    // setData(newData);
  };

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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

  // console.log(data, "userdata");

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
      </section>
      <table className="table">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>ORDER ID</th>
            {/* <th>NAME</th> */}
            <th>PRICE</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ORDERED ON</th>
          </tr>
        </thead>
          {
            data?.length > 0
              ?
            data?.map((item) => {
              return (
                <>
                <tbody style={{ textAlign: "center" }}>
                  <tr>
                    <Link href="" onClick={() => orderDetails(item.id)}>
                      {item.orderId}
                    </Link>
                    {/* <td>{item.name}</td> */}
                    <td>{item.totalAmt}</td>
                    <td>
                      <FaCheck />
                    </td>
                    <td>
                      <FaTimes />
                    </td>
                    <td>{item.created_at.slice(0, 10)}</td>
                  </tr>
                  </tbody>
                </>
              );
            })
            : "you have no orders..."
          }
      </table>
      <Modal show={show}  fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div >
            <tr style={{ textAlign: "center" }} className="orderItem-1">
              
              <th>PRODUCT NAME</th>
              <br />
              <th>QUANTITY</th>
              <br />
              <th>PRICE</th>
            </tr>
          </div>

          {orderData?.OrderItem?.map((item) => {
            return (
              <>
              <div className="orderItem">
                  <td>{item.Product.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.amount}</td>
                  {/* <td>{item.id}</td> */}
                  </div>
              </>
            );
          })}
          </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
};

export default Myorder;
