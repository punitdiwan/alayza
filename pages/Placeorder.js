import React,{useEffect,useState} from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Placeorder = () => {
  const [data,setData] = useState()
  const [amount, setAmount] = useState();
  const [addressData,setAddressData] = useState();



  useEffect(() => {
    const prodData = localStorage.getItem("cart-value");
    const totalAmount = localStorage.getItem("totalAmount")
    const address = localStorage.getItem("addressData")
    setAddressData(JSON.parse(address))
    setAmount(totalAmount)
    setData(JSON.parse(prodData))
  }, [])

  let dataPrice = data?.map((item)=>item.price)
  
  let total = +amount  + 50  +18;



  return (
    <>
    <Header/>
      <section className="place-order-main">
              
        <div className="place-order-2">
            <div>
            <h3>Shipping</h3>
            <p>Address: {addressData?.address}</p>
            </div>
            <hr/>
            <div>
                <h3>Payment Method</h3>
                <p>Method: PayPal</p>
            </div>
            <hr/>
            <div>
                <h3>Cart Items</h3>
                {
                  data?.map((item)=>{
                    return(
                      <div className="place-order-inner">
                    <img src="./images/mouse.jpg"/>
                    <Link href="">{item.name}</Link>
                    <p>{item.qty} x {item.price} </p>
                </div>
                    )
                  })
                }
              
                
            </div>
            <hr/>
            
        </div>
        <div className="products-detail-page-inner-2">
            <h3>Order Summary</h3>
            <p>Subtotal ₹{amount}</p>
            <p>Shipping ₹50.00</p>
            <p>Tax ₹18.00</p>
            <p>Total ₹{total}</p>
            <Link
              href="/Myorder"
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
