import React from "react";
import { FaDotCircle } from "react-icons/fa";

const Weoffer = () => {
  return (
    <>
      <section className="offer-main">
        <div>
          <p>What we Offer</p>
          <h3>OUR POPULAR SERVICES</h3>
        </div>
        <div className="offer-1">
          <div className="offer-1-main">
            <div className="offer-inner">
              <h4>BRIDAL DERMATOLOGY</h4>
              <p>
                In the indian scenario, where bride and groom are regarded to be
                the center
              </p>
               {/* <span> <FaDotCircle /></span> */}
            </div>
            <div className="offer-inner">
              <h4>BRIDAL DERMATOLOGY</h4>
              <p>
                In the indian scenario, where bride and groom are regarded to be
                the center
              </p>
            </div>
          </div>
          <img src="./images/about-us-service-middle-woman.png" />
          <div className="offer-1-main"> 
            <div className="offer-inner">
              <h4>BRIDAL DERMATOLOGY</h4>
              <p>
                In the indian scenario, where bride and groom are regarded to be
                the center
              </p>
            </div>
            <div className="offer-inner">
              <h4>BRIDAL DERMATOLOGY</h4>
              <p>
                In the indian scenario, where bride and groom are regarded to be
                the center
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weoffer;
