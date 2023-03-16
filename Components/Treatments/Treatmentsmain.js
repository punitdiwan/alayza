import React from "react";
import Acnetreatments from "./Acnetreatments";

const Treatmentsmain = () => {
  return (
    <>
      <section className="blog-card-main treatments">
        <img src="./images/acne-treatment.jpg" />
        {/* <Acnetreatments /> */}
        <form autoComplete="off">
          <h2>Book an Appointment</h2>
          <label>
            Your Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Your Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Your Number
            <input type="text" name="number" id="number" />
          </label>
          <label>
            Select Date
            <input type="date" name="number" id="number" />
          </label>

          <label>
            Your Message
            <textarea className="form-control" name="" id="" rows="3"></textarea>
          </label>
          <button className="btn-grad">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Treatmentsmain;
