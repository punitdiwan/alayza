import React from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {FaEdit,FaTrash,FaTimes} from "react-icons/fa";
// import {productData} from "./Products/index"; 


const Myorder=()=>{
    return(<>
    <Header/>
    <section className="order-main" style={{textAlign:"center"}}>

        <h2 style={{borderBottom:"2px solid #52BCC9",width: "fit-content", margin: "1rem"}}>My Orders</h2>
        <table className="table" >
        <thead >
            <tr style={{textAlign: "center"}}>
              <th>ID</th>
                <th>NAME</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTION</th>
              </tr>

            </thead>
            {/* {
                productData.map((item)=>{
                    return(
                        <>

            <tbody style={{textAlign: "center"}}>
                <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><FaTimes/></td>
                <td><FaTimes/></td>
                <td> <button className='cart-btn'> <FaEdit/> </button>
                <button className='cart-btn'> <FaTrash/> </button>
                 </td>
                </tr>
            </tbody>
                        
                        </>
                    )
                })
            } */}
      </table>

    </section>
    <Footer/>
    </>)
} 



export default Myorder;