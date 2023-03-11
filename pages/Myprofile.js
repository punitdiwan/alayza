import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Router from "next/router";
import Link from "next/link";



const Myprofile=()=>{
    return(<>
    <Header/>
        <section className="profile-main">
            <div className="profile-1">
                <h2 style={{borderBottom:"2px solid #52BCC9",width: "fit-content", }}>My Profile</h2>
                <img src="./images/mouse.jpg" style={{width:"80px",height:"80px", borderRadius:"50%"}} />

            </div>
            <form className="profile-form">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button className="profile-btn" style={{marginLeft:"0.5rem",borderRadius:"5px"}}>Update Profile</button>

            </form>
    </section>
    <Footer/>
    </>)
}


export default Myprofile;
