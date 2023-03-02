import React from "react";
import { FaCircle } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";

const Shipping = () => {
  return (
    <>
      <Header />
      <section className="shipping-main">
              <div className="shipping-1">
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="">Sign In</Link>
                  </div>
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="">Shipping</Link>
                  </div>
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="" >Payment</Link>
                  </div>
                  <div className="shipping-2">
                  <FaCircle/>
                  <Link className="" href="">Place Order</Link>
                  </div>
        </div>
        <form autoComplete="off">
          <label>
            <input type="text" placeholder="Address" />
          </label>
          <label>
            <input type="text" placeholder="City" />
          </label>
          <label>
            <input type="text" placeholder="Postal Code" />
          </label>
          <label>
            <input type="text" placeholder="Country" />
          </label>
          <Link className="global-btn" href="/Payment">Continue</Link>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Shipping;
