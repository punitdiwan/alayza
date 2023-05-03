import React from "react";
import { FaCalendarCheck, FaMobileAlt, FaRegClock } from "react-icons/fa";

const Homecard = () => {
  return (
    <>
    
      <section className="home-card-main">
        <div className="home-card-inner">
          <div className="icon-div">
            <FaCalendarCheck />
          </div>

          <h3> Book Appointment </h3>
          <p>Don't Wait! Hurry up and Get ready for your next look.</p>
        </div>
        <div className="home-card-inner">
          <div className="icon-div">
            <FaMobileAlt />
          </div>
          <h3>Call us Now</h3>
          <p>
            Feel free to contact. You can directly reach us on +91 7317618333
          </p>
        </div>
        

        <div className="home-card-inner">
          <div className="icon-div">
            <FaRegClock /> 
          </div>
          <h3>Consultation timing</h3>
          <p>Mon - Sat : 11 Am to 9 pm</p>
        </div>
      </section>
    </>
  );
};

export default Homecard;
