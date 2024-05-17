import React from "react";
import Link from "next/link";

const Meet = () => {
  return (
    <>
      <div className="meet-main">
        <div className="meet-1">
          <p></p>
          <h1>Alayza Life Science</h1>
          <img src="./images/heading-art-01.svg" />
        </div>
        <div className="meet-2">
          <img src="./images/dr-img.jpeg" alt="About" />
          <div className="meet-3">
            <h1>Alayza Life Science</h1>
            <p>
              Dr. 
              
            </p>
            <Link href="/Aboutdr" className="btn-grad" style={{ textDecoration: "none", color: "#03002f" }} >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
