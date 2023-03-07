import React from "react";

const Acnetreatments = () => {
  return (
    <>
      <section className="acne-treatment">
        {treatmentData.map((item) => {
          return (
            <>
              <div className="treatment-maped">
                <div className="treatment-maped-1">
                  <h1>{item.title}</h1>
                  <p>{item.detail}</p>
                </div>
                <img src={item.image} height="400px" width="300px" />
              </div>
            </>
          );
        })}
        {/* <h1>Best Acne Treatment</h1>
        <p>
          Acne or pimples are regarded as one of the most frustrating chronic
          inflammatory problem with tendency to scar in young adults and may be
          persistent in older adults though the severity may vary. Acne scars
          are the product of end stage inflammatory lesions. Post acne scarring
          is one of the most common causes of facial scarring that can lead to
          great psychological distress. So its important to Treat the Acne on
          time to Avoid scars. To get the Best Acne Treatment in Delhi Consult
          the best Dermatologist in Delhi, Dr. Suruchi Puri.
        </p>
        <img src="./images/acne" /> */}
      </section>
    </>
  );
};

export default Acnetreatments;

export const treatmentData = [
  {
    title: "Acne Treatment",
    detail:
      " Acne or pimples are regarded as one of the most frustrating chronic inflammatory problem with tendency to scar in young adults and may bepersistent in older adults though the severity may vary. Acne scars are the product of end stage inflammatory lesions. Post acne scarring is one of the most common causes of facial scarring that can lead to great psychological distress. So its important to Treat the Acne ontime to Avoid scars. To get the Best Acne Treatment in Delhi Consultthe best Dermatologist, Dr.Zeba Quadri.",

    image: "./images/acne.jpeg",
  },
  {
    title: "Photo Facial",
    detail:
      "Photofacial, also known as intense pulsed light (IPL) therapy, is a popular cosmetic procedure that uses light energy to improve the appearance of various skin concerns. The treatment targets the deeper layers of the skin without damaging the surface layer, making it a non-invasive and relatively pain-free alternative to traditional laser treatments.",
    image: "./images/about-zeba.jpeg",
  },
  {
    title: "Tattoo Removal",
    detail:
      "Tattoo removal is a process that involves the removal of unwanted tattoos from the skin. Tattoos are a popular form of body art, but some people regret getting them for various reasons. Fortunately, there are now several options available for those who wish to remove their tattoos.",
    image: "./images/tattoo-1.jpeg",
  },
  {
    title: "Laser Hair Reduction",
    detail:
      "Laser hair reduction is a popular cosmetic procedure that utilizes focused laser energy to remove unwanted hair from various parts of the body. This safe and effective technique has been used for decades to permanently reduce hair growth and provide long-lasting results.",
    image: "./images/laser.jpeg",
  },
  {
    title: "Q - Switch  treatment for Pigmentation",
    detail:
      "Q-Switch treatment is a popular procedure for the treatment of pigmentation on the skin. It is a non-invasive and safe procedure that uses a high-intensity pulsed beam of light to remove unwanted pigmentation from the skin. The treatment is called Q-switch because it uses a specific type of laser that emits short, high-energy pulses in the nanosecond range.",
    image: "./images/switch.jpeg",
  },
];
