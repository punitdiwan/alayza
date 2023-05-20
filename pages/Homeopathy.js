import React, { useEffect, useState } from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useQuery } from "graphql-hooks";
import * as constants from "../Components/Contants";

const pathy = () => {
    const { data } = useQuery(constants.homeopathy);



    return (
        <section className="gallery-main1" style={{ backgroundColor: "white" }}>
            <Header />
            <div className="about-header">
                <h1>Benefits of Homeopathy</h1>
            </div>
            <img src="./images/pathy.jpeg" alt="" />
            <div className="about-doctor-6">



                {
                    data?.Homeopathy?.map((item)=>{
                        return (<>
                        <h4 style={{marginLeft: "2rem", fontWeight: "bolder"}}>{item.h_heading}</h4>
                        <p>{item.h_parograph}</p>
                        </>)
                    })

                }
            </div>

            <Footer />

        </section>
    )
}

export default pathy