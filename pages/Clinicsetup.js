import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const Clinicsetup = () => {
    return (
        <>
            <section className="gallery-main" style={{ backgroundColor: "#1d1d1d" }}>
                <Header />
                <div className="about-header">
                    <h1>Ordering Medicine Online  Consultation</h1>
                    {/* <p>Dr. Suruchi Puri / Gallery</p> */}
                </div>
                {/* <div className="gallery-div1">
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} />
                                </div>
                            )
                        })
                    }
                </div> */}
                <center>

                    <div className="gallery-div1" >
                        <img src="./images/clinicsetup.jpeg" alt="" />
                    </div>
                    <div className="gallery-div2">
                        <img src="./images/clinicsetup1.jpeg" alt="" />
                    </div>
                    <div className="gallery-div1">
                        <img src="./images/clinicsetup22.jpeg" alt="" />
                    </div>
                    <div className="gallery-div2">
                        <img src="./images/clinicsetup2.jpeg" alt="" />
                    </div>
                    <div className="gallery-div1">
                        <img src="./images/clinicsetup11.jpeg" alt="" />
                    </div>

                </center>


                <Footer />

            </section>
        </>
    )
}

export default Clinicsetup



// export const data = [
//     {
//         img: "./images/before1.jpeg"
//     },
//     {
//         img: "./images/before2.jpeg"
//     },
//     {
//         img: "./images/before3.jpeg"
//     },
//     {
//         img: "./images/before4.jpeg"
//     },
//     {
//         img: "./images/before5.jpeg"
//     },
//     {
//         img: "./images/before6.jpeg"
//     },
//     {
//         img: "./images/before7.jpeg"
//     },
//     {
//         img: "./images/before8.jpeg"
//     },
//     {
//         img: "./images/before9.jpeg"
//     },
//     {
//         img: "./images/before10.jpeg"
//     },
//     {
//         img: "./images/before11.jpeg"
//     },
//     {
//         img: "./images/before12.jpeg"
//     },
//     {
//         img: "./images/before13.jpeg"
//     },
//     {
//         img: "./images/before14.jpeg"
//     },
//     {
//         img: "./images/before15.jpeg"
//     },
//     {
//         img: "./images/before16.jpeg"
//     },
//     {
//         img: "./images/before17.jpeg"
//     },
//     {
//         img: "./images/before18.jpeg"
//     },
//     {
//         img: "./images/before19.jpeg"
//     },
//     {
//         img: "./images/before20.jpeg"
//     },
//     {
//         img: "./images/before21.jpeg"
//     },
//     {
//         img: "./images/before22.jpeg"
//     },
//     {
//         img: "./images/before23.jpeg"
//     },
//     {
//         img: "./images/before24.jpeg"
//     }
// ] 