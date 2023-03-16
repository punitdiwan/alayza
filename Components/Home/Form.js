import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    Date: "",
    number: "",
    message: "",
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  // console.log(data)

  const submitData = async (e) => {
    e.preventDefault();
    if (data.number === "") {
      setError("Enter the number");
    } else {
      const response = await fetch("/api/appointment", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData({
        name: "",
        email: "",
        number: "",
        Date: "",
        message: "",
      });
      toast("Appointment Booked!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // const notify = () => toast("Thanks For Submitting Data!");

  return (
    <>
      <div className="form-div">
        <form autoComplete="off" onSubmit={submitData}>
          <h2>Book an Appointment</h2>
          <label>
            Your Name
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={(e) => handleChange(e)}
              required
            />
          </label>
          <label>
            Your Email
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Your Number
            <input
              type="tel"
              name="number"
              id="number"
              value={data.number}
              pattern="[0-9]{10}"
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          {<span>{error}</span>}
          <label>
            Select Date
            <input
              type="date"
              name="Date"
              id="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </label>

          <label>
            Your Message
            <textarea
              className="form-control"
              name="message"
              id=""
              rows="3"
              value={data.message}
              required
              onChange={(e) => handleChange(e)}
            ></textarea>
          </label>
          <button className="btn-grad">Submit</button>
          {/* <button onClick={notify}>dfdf</button> */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
