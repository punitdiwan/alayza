import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { verify, decode } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const forgot = () => {
  const router = useRouter();
  //   console.log(router.query.token, "Query");

  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [newError, setNewError] = useState();
  const [data, setData] = useState();
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmpassword: "",
  });

  //   console.log(newPassword,"password")
  const token = router.query.token;
  //   console.log(router.query);

  const handleChange1 = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
    const minimumCharacters = 8;
    if (newPassword.password.length < minimumCharacters) {
      setNewError("Minimum 8 characters");
    } else {
      setNewError("");
    }
    // setMessage("");
  };

  const handleSubmit = async () => {
    if (
      newPassword.password === newPassword.confirmpassword &&
      newPassword.password.length > 0
    ) {
      //   console.log(newPassword, "sdfjghgf");
      const json = jwt.decode(token);

      fetch(`/api/forgot/${json.email}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(newPassword),
      });
      setNewError("");
      setNewPassword({
        password: "",
        confirmpassword: "",
      });
      alert("password updated succesfully");
      //   console.log("match");
    } else {
      setNewError("Passwords dont match");
    }
  };

  //   console.log(data?.token, "data");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    // console.log(email, "email");
    const res = await fetch(`/api/forgot/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await res.json();

    if (data1 == "User Not Exists") {
      // setError("")
      // console.log(data1);
      setError("Enter the registered email address");
    } else {
      setData(data1);
      alert("Reset Password Link has Been Sent to your registered email ");
      router.push("/Login");

      // console.log(data1);
    }
  };

  return (
    <>
      <Header />
      {router.query.token && (
        <form className="forgot-form">
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            onChange={(e) => {
              handleChange1(e);
            }}
            value={newPassword.password}
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Enter new password again"
            onChange={(e) => {
              handleChange1(e);
            }}
            value={newPassword.confirmpassword}
          />
          {<div>{newError}</div>}
          <button onClick={handleSubmit} className="btn-grad" > Update New Password</button>
        </form>
      )}

      {!router.query.token && (
        <form onSubmit={submitEmail} className="forgot-form">
          <input
            type="email"
            name="email"
            placeholder="Enter Registered Email"
            onChange={handleChange}
            value={email}
          />
          <div>{error}</div>
          <input type="submit" value="Submit" className="btn-grad" />
        </form>
      )}
      <Footer />
    </>
  );
};

export default forgot;
