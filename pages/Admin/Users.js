import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Table from "../../Components/Admin/Table";
const Users = () => {
  return (
    <>
      <Header />
      <section className="Users-main">
        <h2>Users(2)</h2>
        <Table/> 
        </section>
      <Footer />
    </>
  );
};

export default Users;
