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
                  <img src="https://picsum.photos/200" />
                  <h1>Acne Scars</h1>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200" />
                  <h1>Acne Treatments</h1>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200" />
                  <h1>Anti-Wrinkle</h1>
                </div>
              </div>
            </li>
            <li className="cards_item-1">
              <div className="card_new-1">
                <div className="card_image">
                  <img src="https://picsum.photos/200" />
                  <h1>Anti-Wrinkle</h1>
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
