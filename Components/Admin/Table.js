import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { productData } from "../../pages/Products/index";

const Table = () => {
  const [user, setUsers] = useState();

  const fetchProducts = async () => {
    const response = await fetch("/api/Users");
    const data1 = await response.json();
    setUsers(data1);
    console.log(data1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CONFIRMED</th>
            <th>ADMIN</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {Array.isArray(user)
          ? user?.map((item) => {
              return (
                <>
                  <tbody style={{ textAlign: "center" }}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <FaTimes />
                      </td>
                      <td>
                        <FaTimes />
                      </td>
                      <td>
                        
                        <button className="cart-btn">
                          
                          <FaEdit />
                        </button>
                        <button className="cart-btn">
                          
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
    </>
  );
};

export default Table;
