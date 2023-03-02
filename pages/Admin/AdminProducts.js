import React from "react";
import {FaEdit,FaTrash,FaTimes} from "react-icons/fa";
import {productData} from "../Products/index"; 
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Link from "next/link";


const Products =()=>{

    return (
        <>
        <Header/>
            <section className="Users-main">
                <div className="" style={{display:"flex", justifyContent: "space-between", marginBottom:"2rem"}}>
                <h2>Products(2)</h2>
                <Link className="login-btn" href="/Addproduct" style={{width: "20%"}} >Add Product</Link>
                </div>
        <table className="table">
        <thead >
            <tr style={{textAlign: "center"}}><th>
                ID
                </th>
                <th>
                NAME
                </th>
                <th>
                PRICE
                </th>
                <th>
                CATEGORY
                </th>
                <th>
                BRAND
                </th>
                <th>
                
                ACTION
                
                
                </th></tr>

            </thead>
            {
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
                <button className='cart-btn'> <FaTrash/> </button> </td>
                </tr>
            </tbody>
                        
                        </>
                    )
                })
            }
      </table>
      </section>
      <Footer/>

        </>
    )
}


export default Products;