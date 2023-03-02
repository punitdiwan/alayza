import React from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Placeorder = () => {
  return (
    <>
    <Header/>
      <section className="place-order-main">
              
        <div className="place-order-2">
            <div>
            <h3>Shipping</h3>
            <p>Address: aadsad, bhopal-462030, india</p>
            </div>
            <hr/>
            <div>
                <h3>Payment Method</h3>
                <p>Method: PayPal</p>
            </div>
            <hr/>
            <div>
                <h3>Cart Items</h3>
                <div className="place-order-inner">
                    <img src="./images/mouse.jpg"/>
                    <Link href="">sfdssfsfsf</Link>
                    <p>1 x 92500 = ₹92,500.00</p>
                </div>
            </div>
            <hr/>
            
        </div>
        <div className="products-detail-page-inner-2">
            <h3>Order Summary</h3>
            <p>Subtotal ₹92,500.00c</p>
            <p>Shipping ₹500.00</p>
            <p>Tax ₹16,650.00</p>
            <p>Total ₹1,09,650.00</p>
            <Link
              href="/Shoppingcart"
              type="button"
              className="global-btn"
              style={{ width: "100%",textAlign:"center",textDecoration:"none",color:"black" }}>
              Place Order
            </Link></div> 
      </section>
      <Footer/>
    </>
  );
};

export default Placeorder;
