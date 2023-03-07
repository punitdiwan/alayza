import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Results = () => {
  return (
    <>
      <Header />
      <div className="about-header" id="before-after">
        <h1>Before and Afters</h1>
        <p>Dr. Zeba Quadiri / Gallery</p>
      </div>
      <section className="before-after-main">
        <div className="main">
          <ul className="cards-new-1 results">
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/tattoo-1.jpeg" />
                  <h6>Tatoo removal</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/acne.jpeg" />
                  <h6>Acne Treatments</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/intense-pulse.jpeg" />
                  <h6>Intense pulse light treatment for rosacea</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/hair-pro-1.jpeg" />
                  <h6>Hair pro</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/about-zeba.jpeg" />
                  <h6>Photo Facial</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/tattoo-1.jpeg" />
                  <h6>Tattoo Removal</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/laser.jpeg" />
                  <h6>Laser Hair Reduction</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/switch.jpeg" />
                  <h6>Q - Switch treatment for pigmentation</h6>
                </div>
              </div>
            </li>
            {/* <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Psoriasis </h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Anxiety</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Depression</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>PCOD</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Migrane</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Arthritis</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Hormonal Imbalance</h6>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200/300" />
                  <h6>Cracked Heels </h6>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Results;
