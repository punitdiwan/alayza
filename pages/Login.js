import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";

const Login = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Header cart={1} />
      <section className="login-main">
        <div className="login-1">
          <div className="login-btn-div">
            <button
              className={
                toggleState === 1 ? "login-btn active-btn" : "login-btn"
              }
              onClick={() => toggleTab(1)}
            >
              Sign In
            </button>
            <button
              className={
                toggleState === 2 ? "login-btn active-btn" : "login-btn"
              }
              onClick={() => toggleTab(2)}
            >
              Sign Up
            </button>
          </div>
          {toggleState === 1 ? (
            <form autoComplete="off">
              <label>
                <input type="email" name="email" placeholder="Email" />
              </label>
              <label>
                <input type="password" name="password" placeholder="Password" />
              </label>
              <Link className="login-btn"  href="/Shipping" style={{margin:"0.5rem"}}>Login</Link>
            </form>
          ) : (
            ""
          )}
          {toggleState === 2 ? (
            <form autoComplete="off">
              <label>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <label>
                <input type="email" name="email" placeholder="Email" />
              </label>
              <label>
                <input type="password" name="password" placeholder="Password" />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </label>
              <button className="login-btn" style={{ margin: "0.5rem" }}>
                Register
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
