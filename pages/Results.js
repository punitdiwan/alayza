import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useQuery } from "graphql-hooks";
import * as constants from "../Components/Contants";

const Results = () => {

  const { data } = useQuery(constants.Result);

  return (
    <>
      <Header />
      <div className="about-header" id="before-after">
        <h1>Before and Afters</h1>
        <p>Dr. Zeba Quadiri</p>
      </div>
      <section className="before-after-main">
        <div className="main">
          <ul className="cards-new-1 results">
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[0].Image?.id}`}

                  />
                  <h6>{data?.Result[0].Name}</h6>
                  {/* <img src="./images/tattoo-1.jpeg" /> */}
                  {/* <h6>Tatoo removal</h6> */}

                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[1].Image?.id}`}

                  />
                  <h6>{data?.Result[1].Name}</h6>
                  {/* <img src="./images/acne.jpeg" />
                  <h6>Acne Treatments</h6> */}
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[2].Image?.id}`}

                  />
                  <h6>{data?.Result[2].Name}</h6>
                  {/* <img src="./images/intense-pulse.jpeg" />
                  <h6>Intense pulse light treatment for rosacea</h6> */}
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[3].Image?.id}`}

                  />
                  <h6>{data?.Result[3].Name}</h6>
                  {/* <img src="./images/hair-pro-1.jpeg" />
                  <h6>Hair pro</h6> */}
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <a href="/Photoface">
                <div className="card_new-1">
                  <div className="card_image">
                    <img

                      src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[4].Image?.id}`}

                    />
                    <h6>{data?.Result[4].Name}</h6>
                    {/* <img src="./images/about-zeba.jpeg" />
                    <h6>Photo Facial</h6> */}
                  </div>
                </div>
              </a>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[5].Image?.id}`}

                  />
                  <h6>{data?.Result[5].Name}</h6>
                  {/* <img src="./images/tattoo-1.jpeg" />
                  <h6>Tattoo Removal</h6> */}
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[6].Image?.id}`}

                  />
                  <h6>{data?.Result[6].Name}</h6>
                  {/* <img src="./images/laser.jpeg" />
                  <h6>Laser Hair Reduction</h6> */}
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img

                    src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Result[7].Image?.id}`}

                  />
                  <h6>{data?.Result[7].Name}</h6>
                  {/* <img src="./images/switch.jpeg" />
                  <h6>Q - Switch treatment for pigmentation</h6> */}
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
