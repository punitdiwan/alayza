import React,{useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Table from "../../Components/Admin/Table";
const Users = () => {

  const [userlength, setUserlength] = useState();  

  const returnData = (data1)=>{
    setUserlength(data1)
  }



  return (
    <>
      <Header />
      <section className="Users-main">
        <h2>Users({userlength})</h2>
        <Table function1={returnData} /> 
        </section>
      <Footer />
    </>
  );
};

export default Users;
