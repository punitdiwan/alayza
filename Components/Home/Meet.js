import React from "react";

const Meet = () => {
  return (
    <>
      <div className="meet-main">
        <div className="meet-1">
          <p>Meet our Dermatologist</p>
          <h1>Dr. Zeba Quadiri</h1>
          <img src="./images/heading-art-01.svg" />
        </div>
        <div className="meet-2">
          <img src="https://picsum.photos/0/" alt="About" />
          <div className="meet-3">
            <h1>Dr. Zeba Quadiri</h1>
            <p>
              Dr.Zeba Quadiri is a renowned dermatologist and cosmetologist
              with vast experience in the field of cosmetic, Laser and Bridal
              Dermatology. 
              {/* She has passed out from prestigious Maulana Azad
              Medical College and had her thesis on drug therapy in Male
              Androgenetic Alopecia at LNJP HOSPITAL DELHI. */}
            </p>
            <button className="meet-btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
