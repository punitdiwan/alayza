import React from "react";
import {FaEdit,FaTrash,FaTimes} from "react-icons/fa";
import {productData} from "../Products/index"; 
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";




const Orders =()=>{
    return (<>
       <Header/>
        <section className="Users-main">
        <h2>All Orders(2)</h2>
        <table className="table">
        <thead >
            <tr style={{textAlign: "center"}}>
                <th>ID</th>
                <th>USER</th>
                <th>TOTAL</th>
                <th>DATE</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>ACTION</th>
                </tr>

            </thead>
            {
                productData.slice(0,2).map((item)=>{
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
                <button className='cart-btn'> <FaTrash/> </button> </td>
                <td>  <button className="global-btn">View Details</button></td>
                </tr>
            </tbody>
                        
                        </>
                    )
                })
            }
      </table>
      </section>
      <Footer/>
    
    </>)

}


export default Orders;