import React from "react";
import { FaDotCircle } from "react-icons/fa";

const Weoffer = () => {
  return (
    <>
      <section className="offer-main">
        <div>
          <p>What we Offer</p>
          <h3>OUR POPULAR SERVICES</h3>
        </div>
        <div className="offer-1">
          <div className="offer-1-main">
            <div className="offer-inner">
              <h4>Q - Switch treatment for pigmentation</h4>
              <p>
                Q-Switch treatment is a popular procedure for the treatment of
                pigmentation on the skin. It is a non-invasive and safe
                procedure that uses a high-intensity pulsed beam of light to
                remove unwanted pigmentation from the skin.
              </p>
              {/* <span> <FaDotCircle /></span> */}
            </div>
            <div className="offer-inner">
              <h4>Laser Hair Reduction</h4>
              <p>
                Laser hair reduction is a popular cosmetic procedure that
                utilizes focused laser energy to remove unwanted hair from
                various parts of the body. This safe and effective technique has
                been used for decades to permanently reduce hair growth and
                provide long-lasting results.
              </p>
            </div>
          </div>
          <img src="./images/about-us-service-middle-woman.png" />
          <div className="offer-1-main">
            <div className="offer-inner">
              <h4>Tattoo Removal</h4>
              <p>
              Tattoo removal is a process that involves the removal of unwanted tattoos from the skin. Tattoos are a popular form of body art, but some people regret getting them for various reasons.
              </p>
            </div>
            <div className="offer-inner">
              <h4>Acne treatment</h4>
              <p>
                Acne or pimples are regarded as one of the most frustrating
                chronic inflammatory problem with tendency to scar in young
                adults and may bepersistent in older adults though the severity
                may vary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weoffer;
