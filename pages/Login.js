import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
// import { nanoid } from "nanoid";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [admin, setAdmin] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [toggleState, setToggleState] = useState(2);
  const [error, setError] = useState(false);
  const [newError, setNewError] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      const response = await fetch("/api/Users", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setToggleState(1);
    } else {
      setError("The password and confirmation password do not match. ");
    }
  };
  // console.log(data, "data");

  const CheckAdmin = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/Users/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await res.json();
    console.log(data1?.password, "pass");
    console.log(password, "data-pass");
    if (password === data1?.password && email === data1?.email) {
      localStorage.setItem("Token", "sfddsfdsf43245sdfxzxzce")
      if (data1?.role === "ADMIN") {
        setAdmin(true);
        router.push("/Admin/AdminProduct");
      } else {
        router.push("/Shipping");
      }
    } else {
      setNewError("Invalid email password");
    }
  };

  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange2 = (e) => {
    setPassword(e.target.value);
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
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    handleChange1(e);
                  }}
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    handleChange2(e);
                  }}
                />
              </label>
              <div style={{color:"red"}}>{newError}</div>
              <button
                className="login-btn"
                href="/Shipping"
                style={{ margin: "0.5rem" }}
                onClick={CheckAdmin}
              >
                Login
              </button>
            </form>
          ) : (
            ""
          )}
          {toggleState === 2 ? (
            <form autoComplete="off">
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </label>
              <div style={{ color: "red" }}>{error}</div>
              <button
                className="login-btn"
                style={{ margin: "0.5rem" }}
                onClick={submitData}
              >
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
