import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes, FaCheck } from "react-icons/fa";
// import { productData } from "../../pages/Products/index";
import Pagination from "../Pagination";
import { paginate } from "../../utils/paginate";
import Spinner from "react-bootstrap/Spinner";

const Table = ({ function1 }) => {
  const [user, setUsers] = useState();
  // const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const fetchProducts = async () => {
    const response = await fetch("/api/Users");
    const data1 = await response.json();
    setUsers(data1);
    function1(data1.length);
    setLoading(false);
  };

  //  console.log(user?.map((item)=>item.Order),"user")

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteUser = async (id) => {
    try {
      fetch(`/api/Users/${id}`, {
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

  // const fetchUser = async () => {
  //   const res = await fetch(`/api/Users/${1329}`);
  //   const resData = await res.json();
  //   setData(resData);
  // };
  // console.log(data?.role, "iddd");

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginateUser = paginate(user, currentPage, pageSize);

  // console.log(user, "pagination");

  return (
    <>
      <section>
        {!loading ? (
          <table className="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                {/* <th>Orders</th> */}
                <th>ADMIN</th>
                <th>ACTION</th>
              </tr>
            </thead>

            {Array.isArray(paginateUser)
              ? paginateUser?.map((item, index) => {
                  return (
                    <>
                      <tbody style={{ textAlign: "center" }} key={item.id}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          {/* <td>{item.Order}</td> */}
                          <td>
                            {item.role === "ADMIN" ? <FaCheck /> : <FaTimes />}
                          </td>
                          <td>
                            <button
                              className="cart-btn"
                              onClick={() => deleteUser(item.id)}
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
        ) : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {paginateUser.length > 0 ? (
          <Pagination
            items={user?.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Table;
