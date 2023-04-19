import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Homeopathy = () => {
    return (
        <section className="gallery-main1" style={{ backgroundColor: "white" }}>
            <Header />
            <div className="about-header">
                <h1>Zebdermm Wellness - Homeopathy</h1>
            </div>
            <img src="./images/homeopathy.jpeg" alt="" />
            <div className="about-doctor-6">
                <br />
                <h5>Risk Free</h5>
                <p>Homeopathy is completely risk-free as it is not concentrated medicine and provides a minimal healing dose.</p>
                <br />
                <h5>Affordable</h5>
                <p>Homeopathy is an affordable line of treatment that can treat chronic diseases without expensive hospitalization and medication.</p>
                <br />
                <h5>Effective</h5>
                <p>Homeopathy is an effective medicine for chronic as well as acute illnesses. Homeopathic medicine has a curative effect that can be felt instantly.</p>
                <br />
                <h5>Builds Resistance</h5>
                <p>Homeopathic medicine helps to build resistance in the patient as it not only heals, it helps to form an immune response against diseases.</p>
                <br />
            </div>

            <Footer />

        </section>
    )
}

export default Homeopathy