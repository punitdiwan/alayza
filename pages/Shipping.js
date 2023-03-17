import React, { useState,useEffect } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

const Shipping = () => {
  const [fieldData, setFieldData] = useState({
    address: "",
    city: "",
    postalcode: "",
    country: "",
  });
  const [data, setData] = useState({});
  const [error, setError] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      router.push("/Login");
      // setValidate(true);
    }
  }, []);



  const router = useRouter();

  const handleChange = (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("addressData", JSON.stringify(fieldData));
    router.push("/Payment");
  };
  // console.log(fieldData,"dyhgafsjkha")

  return (
    <>
      <Header />
      <section className="shipping-main">
        <div className="shipping-1">
          <div className="shipping-2">
            <FaCircle />
            <Link className="" href="">
              Sign In
            </Link>
          </div>
          <div className="shipping-2">
            <FaCircle />
            <Link className="" href="">
              Shipping
            </Link>
          </div>
          <div className="shipping-2">
            <FaRegCircle />
            <Link className="" href="">
              Payment
            </Link>
          </div>
          <div className="shipping-2">
            <FaRegCircle />
            <Link className="" href="">
              Place Order
            </Link>
          </div>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Address"
              required
              onChange={(e) => handleChange(e)}
              name="address"
              value={fieldData.address}
            />
          </label>
          <div>{error}</div>
          <label>
            <input
              type="text"
              placeholder="City"
              required
              onChange={(e) => handleChange(e)}
              value={fieldData.city}
              name="city"
            />
          </label>
          <div>{error}</div>
          <label>
            {/* <input type="text" placeholder="Postal Code" required onChange={} value=""/> */}
            <input
              id="zip"
              type="text"
              pattern="[0-9]*"
              placeholder="Postal Code"
              required
              name="postalcode"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Country"
              required
              onChange={(e) => handleChange(e)}
              value="India"
              name="country"
            />
          </label>
          {/* <button  onClick={handleSubmit}>Submit</button> */}
          <input type="submit" className="btn-grad" />
          {/* Continue */}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Shipping;
