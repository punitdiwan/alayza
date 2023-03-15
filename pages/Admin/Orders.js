import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes,FaCheck } from "react-icons/fa";
import Header from "../../Components/Admin/Header";
import Footer from "../../Components/Footer";

const Orders = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const data = await fetch("/api/Orders");
    const res = await data.json();
    setData(res);
    console.log(res, "data");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="Users-main">
        <h2>All Orders(2)</h2>
        <table className="table">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>ID</th>
              <th>USERID</th>
              {/* <th>TOTAL</th> */}
              <th>DATE</th>
              <th>PAID</th>
              {/* <th>DELIVERED</th> */}
              {/* <th>ACTION</th> */}
            </tr>
          </thead>
          {data?.map((item) => {
            return (
              <>
                <tbody style={{ textAlign: "center" }}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    {/* <td>{item.price}</td> */}
                    <td>
                      {/* <FaTimes /> */}
                      {item.created_at}
                    </td>
                    <td>
                      <FaCheck />
                    </td>
                    <td>
                      {/* <button className="cart-btn">
                        
                        <FaEdit />
                      </button>
                      <button className="cart-btn">
                        
                        <FaTrash />
                      </button> */}
                    </td>
                    <td>
                      <button className="global-btn">View Details</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </section>
      <Footer />
    </>
  );
};

export default Orders;
