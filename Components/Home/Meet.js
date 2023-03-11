import React from "react";
import Link from "next/link";

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
          <img src="./images/dr-img.jpeg" alt="About" />
          <div className="meet-3">
            <h1>Dr. Zeba Quadiri</h1>
            <p>
              Dr. Zeba is a renowned and highly acclaimed homeopathic doctor and
              aesthetician, who has more than 15 years of experience. Her
              passion for this field first sparked when she happened to take a
              trip to Kargil where she was stunned to see people's severe skin
              issues, how they had very limited options to cure them, and had to
              lead a life with those issues helplessly. Dr. Zeba's heart
              immediately reached out to help them and that's when she
              discovered her immense interest in treating skin- related issues
              through homeopathy aesthetics and skincare products, that's how
              zebdermm brand was born.
              {/* She has passed out from prestigious Maulana Azad
              Medical College and had her thesis on drug therapy in Male
              Androgenetic Alopecia at LNJP HOSPITAL DELHI. */}
            </p>
            <Link href="/Aboutdr" className="meet-btn" >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
