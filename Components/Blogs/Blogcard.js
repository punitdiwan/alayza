import React from "react";

const Blogcard = () => {
  return (
    <>
      <section className="blog-card-main">
        <div className="main">
          {/* <h1>Responsive Card Grid Layout</h1> */}
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    LASER HAIR REMOVAL - SOME MYTH BUSTERS
                  </h2>
                  <p className="card_text">
                  Are you thinking about laser hair removal, but have thousands of questions in mind? Stay right there. 
                  </p>
                  <button className="global-btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=5" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Stretch Marks Treatment</h2>
                  <p className="card_text">
                  Looking for stretch marks treatment ? You have landed at the right place. Lets first take a look at
                  </p>
                  <button className="global-btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=11" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Wart removal : Best Skin Specialist</h2>
                  <p className="card_text">
                  What are warts? Warts are non-cancerous tumors or skin growths caused by infection with HPV (human papillomavirus). HPV stimulates the
                  </p>
                  <button className="global-btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=14" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">16 Best Hair Care Tips Every Girl Must Know</h2>
                  <p className="card_text">
                  Who doesn’t want voluminous and lustrous hair bouncing their way as we walk? Let’s face it, there are some days
                  </p>
                  <button className="global-btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=17" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Mole Removal: Best Skin Specialist</h2>
                  <p className="card_text">
                  What are Moles? Our skin contains cells called Melanocytes which produces melanin. Melanin is the natural pigment that gives our
                  </p>
                  <button className="global-btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=2" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Acne: Causes and Best Acne Treatment</h2>
                  <p className="card_text">
                  Acne most commonly affects teenagers but the truth is, it is quite common for acne to persist into adulthood. Although
                  </p>
                  <button className="global-btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <form autoComplete="off">
          <h2>Book an Appointment</h2>
          <label>
            Your Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Your Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Your Number
            <input type="text" name="number" id="number" />
          </label>
          <label>
            Select Date
            <input type="date" name="number" id="number" />
          </label>

          <label>
            Your Message
            <textarea className="form-control" name="" id="" rows="3"></textarea>
          </label>
          <button className="form-btn">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Blogcard;
