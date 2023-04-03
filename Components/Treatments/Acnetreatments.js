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
  {
    title: "Intense pulse light treatment for rosacea",
    detail:
      "Intense Pulsed Light (IPL) therapy is a popular non-invasive treatment for rosacea that uses pulses of light to target the redness and flushing associated with the condition. The light penetrates the skin and is absorbed by the blood vessels, causing them to collapse and reduce the appearance of redness.",
    image: "./images/intense-pulse.jpeg",
  },
  {
    title: "Hair Pro",
    detail:
      "Hair Pro is a software program designed for professional hair salons and stylists. It provides tools for managing appointments, tracking inventory, creating custom services and pricing, and generating reports. Hair Pro also includes features such as photo galleries, customer profiles, and marketing tools.",
    image: "./images/hair-pro-1.jpeg",
  },
  {
    title: "Homeopathic",
    detail:
      "An alternative approach to medicine based on the belief that natural substances, prepared in a special way and used most often in very small amounts, restore health. According to these beliefs, in order for a remedy to be effective, it must cause in a healthy person the same symptoms being treated in the patient. Also called homeopathy.",
    image: "./images/Homeopathic.jpg",
  },
  {
    title: "Aesthetic",
    detail:
      "Aesthetic medicine is a branch of modern medicine that focuses on altering cosmetic appearance through the treatment of conditions including scars, skin laxity, wrinkles, moles, liver spots, excess fat, cellulite, unwanted hair, skin discoloration, and spider veins.",
    image: "./images/Aesthetic.jpg",
  },
];
