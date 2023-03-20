import React, { useState, useEffect } from "react";
import { paginate } from "../../utils/paginate";
import Pagination from "../../Components/Pagination";
import Header from "../../Components/Admin/Header";
import Footer from "../../Components/Footer";

const appointments = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchData = async () => {
    const data = await fetch("/api/appointment");
    const res = await data.json();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginateOrder = paginate(data, currentPage, pageSize);
  // console.log(data, "data");

  return (
    <>
      <Header />
      <div className="Users-main">
        <h2>All Appointments({data?.length})</h2>
        <div>
          <table className="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>DATE</th>
                <th>MOBILE NUMBER</th>
              </tr>
            </thead>
            {paginateOrder?.map((item) => {
              return (
                <>
                  <tbody style={{ textAlign: "center" }}>
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.Date}</td>
                      <td>{item.number}</td>
                      {/* <td>
                        <button className="global-btn">View Details</button>
                      </td> */}
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
          <Pagination
            items={data?.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default appointments;
