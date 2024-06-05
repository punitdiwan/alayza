import React from "react";
// import Multicarousel from "../Components/Multicarousel";
import Multicarousel from "./Multicarousel";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";


const Dermatologistservice = () => {
  return (
    <>
      <div className="derma-main">
        <h4>Stay Connected</h4>
        <img src="./images/heading-art-01.svg" />
        <h3>
        <Link href="https://www.facebook.com/people/Alayza-life-science/100083322518615/?sk=photos"> <FaFacebookSquare style={{height:50,}} /></Link>
             
        <Link href="https://in.linkedin.com/company/alayzalifesciences"> <FaLinkedinIn style={{height:50}} /></Link></h3>
      </div>
      <Multicarousel />
    </>
  );
};

export default Dermatologistservice;
