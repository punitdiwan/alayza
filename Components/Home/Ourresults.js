import React from "react";

const Ourresults = () => {
  return (
    <>
      <section className="result-main">
        <div className="">
          <p>Good at work</p>
          <h1>Our Results</h1>
          <img src="./images/heading-art-01.svg" />
        </div>
        <div className="main">
          <ul className="cards-new-1">
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/result-4.png" />
                  <h5>Tatoo removal</h5>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/result-1.png" />
                  <h5>Acne Treatments</h5>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/result-2.png" />
                  <h5>Laser Hair Reduction</h5>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="./images/result-3.png" />
                  <h5>Hair pro</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className="global-btn">View All</button>
      </section>
    </>
  );
};

export default Ourresults;
