import React,{useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FaTrash,FaPlus,FaMinus,FaTimes } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";
import {productData} from "./Products/index";



const Shoppingcart = () => {

    const [cart, setCart] = useState(1);

    function decrement(){
        if (cart > 1){
            setCart(cart-1)
        }
        // console.log("hello")
    }
    const data =  productData;
    console.log(data)
  return (
    <>
    <Header cart={cart} /><br/>
          <button className="global-btn" onClick={() => Router.back()} style={{marginLeft:"10%"}}>
          Go Back
        </button>
          <section className="shopping-cart-main">
            <div className="shopping-cart-1">
                <h2>Shopping Cart</h2>
                <div className="shopping-cart-1-inner">
                    <img src="./images/mouse.jpg"/>
                    <h5 >Cannon EOS 80D DSLR Camera</h5>
                    <p >{  data[0].price} <FaTimes/> {cart}</p>
                    <div className='cart-btn-div'>
                    <button className="cart-btn" onClick={()=>setCart(cart+1)} > <FaPlus/> </button>
                    <button className="cart-btn" onClick={decrement}><FaMinus/></button>
                    </div>
                    <button className="cart-btn"><FaTrash/></button>
                </div>
            </div>
            <div className="shopping-cart-2">
                <h4>Subtotal ({cart}) Items</h4>
                <p>Price  {data[0].price} </p>
                <Link href="/Login"className="global-btn" >Proceed to Checkout</Link>
            </div>
              
    </section>
    <Footer/>
    </>
  )
}

export default Shoppingcart