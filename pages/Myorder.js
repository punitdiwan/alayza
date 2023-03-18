import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaEdit, FaTrash, FaTimes, FaCheck } from "react-icons/fa";
import jwt from "jsonwebtoken";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { paginate } from "../utils/paginate";
import Pagination from "../Components/Pagination";
// import {productData} from "./Products/index";

const Myorder = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [data, setData] = useState();
  const [orderData, setOrderData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  // console.log(data?.id, "data");

  const orderDetails = async (id) => {
    // console.log(id);
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
    setLoading(false);
    setData(newData);
  };
  // console.log(data, "newdATA");

  useEffect(() => {
    fetchOrder();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const showModal = () => {
    setShow(false);
  };

  // console.log(data, "userdata");

  const paginateOrder = paginate(data, currentPage, pageSize);
  // console.log(data, "data");

  return (
    <>
      <Header />
      <section className="Users-main">
        <h2
          style={{
            borderBottom: "2px solid #52BCC9",
            width: "fit-content",
            margin: "1rem",
          }}
        >
          My Orders
        </h2>

        <table className="table" id="table">
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
            !loading
              ? paginateOrder?.map((item) => {
                  return (
                    <>
                      <tbody style={{ textAlign: "center" }} key={item.id}>
                        <tr id="order-new-1" key={item.id}>
                          <td
                            href=""
                            onClick={() => orderDetails(item.id)}
                            style={{
                              textDecoration: "underline",
                              cursor: "pointer",
                              color: "blue",
                            }}
                          >
                            {item.orderId}
                          </td>
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
              :
               <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          }
        </table>

        <Pagination
          items={data?.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => showModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title> Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
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
                  <div className="orderItem" key={item.id}>
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
      </section>
      <Footer />
    </>
  );
};

export default Myorder;
