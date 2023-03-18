import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
// import jwt from "next/jwt";

// import { nanoid } from "nanoid";
import Spinner from "react-bootstrap/Spinner";

// const bcrypt = require('bcrypt');

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
  const [toggleState, setToggleState] = useState(1);
  const [error, setError] = useState(false);
  const [newError, setNewError] = useState(false);
  const [validate, setValidate] = useState(false);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      router.push("/Products");
      // setValidate(true);
    }
  }, []);

  // console.log(router.path,"path")

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setMessage("");
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!regEx.test(data.email)) {
      setMessage("Enter a valid Email and password");
    } else {
      let minimumLength = 8;
      if (data.password.length < minimumLength) {
        setError("password must be of 8 characters");
      } else {
        if (data.password === data.confirmpassword) {
          const existingUSer = await fetch(`/api/Users/${data.email}`);
          const resData = await existingUSer.json();
          if (resData?.user?.email === data.email) {
            setError("User already register with this email");
          } else {
            const response = await fetch("/api/Users", {
              method: "POST",
              body: JSON.stringify({ data }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            setToggleState(1);
            setError("");
            setNewError("");
          }
        } else {
          setError("The password and confirmation password do not match. ");
        }
      }
    }
  };
  // console.log(data, "data");

  const CheckAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/Users/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await res.json();
    console.log(data1, "data");

    localStorage.setItem("Token", data1.token);
    if (password === data1?.user?.password && email === data1?.user?.email) {
      if (data1?.user.role === "ADMIN") {
        setAdmin(true);
        router.push("/Admin/AdminProduct");
        setLoading(false);
      } else {
        // Router.back();
        router.push("/Shipping");
        setLoading(false);
      }
    } else {
      setNewError("Invalid User Name and Password");
    }
  };

  const handleChange1 = (e) => {
    setEmail(e.target.value);
    setNewError(" ");
  };
  const handleChange2 = (e) => {
    setPassword(e.target.value);
    setNewError(" ");
  };

  return (
    <>
      <Header cart={1} />
      <section className="login-main">
        {
          <div className="login-1">
            <div className="login-btn-div">
              <button
                className={
                  toggleState === 1 ? "login-btn-1 active-btn" : "login-btn-1"
                }
                onClick={() => toggleTab(1)}
              >
                Sign In
              </button>
              <button
                className={
                  toggleState === 2 ? "login-btn-1 active-btn" : "login-btn-1"
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
                    required
                  />
                </label>
                {<div>{message}</div>}
                <label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      handleChange2(e);
                    }}
                    required
                  />
                </label>
                <div style={{ color: "red", marginLeft: "1rem" }}>
                  {newError}
                </div>
                <div className="login-btn-div-1">
                  <Link
                    href="/forgot"
                    style={{
                      margin: "1rem",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Forgot Password?
                  </Link>
                  <Link
                    href=""
                    onClick={() => setToggleState(2)}
                    style={{ margin: "1rem", color: "black" }}
                  >
                    Dont Have Account?
                  </Link>
                </div>

                <div className="login-btn-div-1">
                  <button
                    className="login-btn-new"
                    // href="/Products"
                    style={{
                      width: "95%",
                    }}
                    onClick={CheckAdmin}
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              ""
            )}
            {toggleState === 2 ? (
              <form autoComplete="off" onSubmit={submitData}>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
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
                    required
                  />
                </label>
                {<div>{message}</div>}
                <label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    required
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
                    required
                  />
                </label>
                <div style={{ color: "red" }}>{error}</div>
                <input
                  type="submit"
                  value="Register"
                  className="login-btn-new"
                />
              </form>
            ) : (
              ""
            )}
          </div>
        }
      </section>
      <Footer />
    </>
  );
};

export default Login;
