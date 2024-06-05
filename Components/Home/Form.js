import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createDirectus, rest, createItem } from "@directus/sdk";
import 'react-toastify/dist/ReactToastify.css';

const client = createDirectus('https://cms.maitretech.com/alayza/').with(rest());

const Form = () => {
    const [data, setData] = useState({
      name: "",
      email: "",
      number: "",
      message: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
      
        e.preventDefault();
        if (data.number === "") {
            setError("Enter the number");
            return;
        }

        try {
            await client.request(
                createItem('formdata', {
                    name: data.name,
                    number: data.number,
                    email: data.email,
                    message: data.message,
                })
            );

            setData({
                name: "",
                number: "",
                email: "",
                message: "",
            });

            toast("We will contact you shortly!!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            console.log(error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="form-div">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <label>
                        Your Name
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={handleChange}
                            required
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </label>
                    
                    <label>
                        Your Message
                        <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            rows="3"
                            value={data.message}
                            required
                            onChange={handleChange}
                        ></textarea>
                    </label>
                    {error && <span>{error}</span>}
                    <button type="submit" className="btn-grad">Submit</button>
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
