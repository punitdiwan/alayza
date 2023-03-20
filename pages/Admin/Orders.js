import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaTimes, FaCheck } from "react-icons/fa";
import Header from "../../Components/Admin/Header";
import Footer from "../../Components/Footer";
import { paginate } from "../../utils/paginate";
import Pagination from "../../Components/Pagination";
import Spinner from "react-bootstrap/Spinner";

const Orders = () => {
  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const fetchData = async () => {
    const data = await fetch("/api/Orders");
    const res = await data.json();
    setData(res);
    setLoading(false);
    // console.log(res,"userdata1 ")
  };

  // const fetchUsers=async()=>{
  //   const data1 =  await fetch("/api/Users");
  //   const response = await data1.json()
  //   setNewData(response)
  //   console.log(response,"userdata ")
  // }

  useEffect(() => {
    fetchData();
  }, []);

  let total1 = data?.map((item) => item.totalAmt);
  let sum = total1?.reduce(function (previousValue, currentValue) {
    return previousValue + +currentValue;
  }, 0);
  // setTotal(sum)
  // console.log(sum)

  // let reversed = data?.reverse();

  // console.log(reversed, "data");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginateOrder = paginate(data, currentPage, pageSize);

  // console.log(data, "pagination");

  return (
    <>
      <Header />
      <section className="Users-main">
        <h2>All Orders({data?.length})</h2>
        {!loading ? (
          <table className="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>ID</th>
                <th>USER NAME</th>
                {/* <th>TOTAL</th> */}
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>PAID</th>
                {/* <th>ACTION</th> */}
              </tr>
            </thead>
            {paginateOrder?.reverse().map((item) => {
              return (
                <>
                  <tbody style={{ textAlign: "center" }}>
                    <tr key={item.id}>
                      <td>{item.orderId}</td>
                      <td>{item.User.name}</td>
                      <td>{item.totalAmt}</td>
                      <td>
                        {/* <FaTimes /> */}
                        {item.created_at.slice(0, 10)}
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
                      {/* <td>
                      <button className="global-btn">View Details</button>
                    </td> */}
                    </tr>
                  </tbody>
                </>
              );
            })}
            <thead style={{ borderTop: "3px solid grey" }}>
              <tr style={{ textAlign: "center" }}>
                <th>TOTAL AMOUNT </th>
                <th></th>
                {/* <th>TOTAL</th> */}
                <th> {sum}</th>
                <th></th>
                <th></th>
                {/* <th>ACTION</th> */}
              </tr>
            </thead>
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

        {paginateOrder.length > 0 ? (
          <Pagination
            items={data?.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        ) : (
          ""
        )}
      </section>
      <Footer />
    </>
  );
};

export default Orders;
