import React from "react";
import { useQuery } from "graphql-hooks";
import * as constants from "../Contants";


const Acnetreatments = () => {


  const { data } = useQuery(constants.Timage);


  console.log(data, "timage-data")



  return (
    <>
      <section className="acne-treatment">
        {/* {treatmentData.map((item) => { */}
        {/* return ( */}
        <>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[0].THeading}</h5>
              <h5>{data?.Timage[0].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[0].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[1].THeading}</h5>
              <h5>{data?.Timage[1].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[1].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[2].THeading}</h5>
              <h5>{data?.Timage[2].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[2].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[3].THeading}</h5>
              <h5>{data?.Timage[3].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[3].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[4].THeading}</h5>
              <h5>{data?.Timage[4].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[4].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[5].THeading}</h5>
              <h5>{data?.Timage[5].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[5].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[6].THeading}</h5>
              <h5>{data?.Timage[6].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[6].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[7].THeading}</h5>
              <h5>{data?.Timage[7].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[7].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[8].THeading}</h5>
              <h5>{data?.Timage[8].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[8].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[9].THeading}</h5>
              <h5>{data?.Timage[9].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[9].Timage?.id}`}

            />
          </div>
          <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h5>{data?.Timage[10].THeading}</h5>
              <h5>{data?.Timage[10].TInfo}</h5>
            </div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}assets/${data?.Timage[10].Timage?.id}`}

            />
          </div>
        </>
        {/* );
        })} */}
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





// export const treatmentData = [
//   {
//     title: "Acne Treatment",
//     detail:
//       " Acne or pimples are regarded as one of the most frustrating chronic inflammatory problem with tendency to scar in young adults and may bepersistent in older adults though the severity may vary. Acne scars are the product of end stage inflammatory lesions. Post acne scarring is one of the most common causes of facial scarring that can lead to great psychological distress. So its important to Treat the Acne ontime to Avoid scars. To get the Best Acne Treatment in Delhi Consultthe best Dermatologist, Dr.Zeba Quadri.",

//     image: "./images/acne.jpeg",
//   },
//   {
//     title: "Photo Facial",
//     detail:
//       "Photofacial, also known as intense pulsed light (IPL) therapy, is a popular cosmetic procedure that uses light energy to improve the appearance of various skin concerns. The treatment targets the deeper layers of the skin without damaging the surface layer, making it a non-invasive and relatively pain-free alternative to traditional laser treatments.",
//     image: "./images/about-zeba.jpeg",
//   },
//   {
//     title: "Tattoo Removal",
//     detail:
//       "Tattoo removal is a process that involves the removal of unwanted tattoos from the skin. Tattoos are a popular form of body art, but some people regret getting them for various reasons. Fortunately, there are now several options available for those who wish to remove their tattoos.",
//     image: "./images/tattoo-1.jpeg",
//   },
//   {
//     title: "Laser Hair Reduction",
//     detail:
//       "Laser hair reduction is a popular cosmetic procedure that utilizes focused laser energy to remove unwanted hair from various parts of the body. This safe and effective technique has been used for decades to permanently reduce hair growth and provide long-lasting results.",
//     image: "./images/laser.jpeg",
//   },
//   {
//     title: "Q - Switch  treatment for Pigmentation",
//     detail:
//       "Q-Switch treatment is a popular procedure for the treatment of pigmentation on the skin. It is a non-invasive and safe procedure that uses a high-intensity pulsed beam of light to remove unwanted pigmentation from the skin. The treatment is called Q-switch because it uses a specific type of laser that emits short, high-energy pulses in the nanosecond range.",
//     image: "./images/switch.jpeg",
//   },
//   {
//     title: "Intense pulse light treatment for rosacea",
//     detail:
//       "Intense Pulsed Light (IPL) therapy is a popular non-invasive treatment for rosacea that uses pulses of light to target the redness and flushing associated with the condition. The light penetrates the skin and is absorbed by the blood vessels, causing them to collapse and reduce the appearance of redness.",
//     image: "./images/intense-pulse.jpeg",
//   },
//   {
//     title: "Hair Pro",
//     detail:
//       "Hair Pro is a software program designed for professional hair salons and stylists. It provides tools for managing appointments, tracking inventory, creating custom services and pricing, and generating reports. Hair Pro also includes features such as photo galleries, customer profiles, and marketing tools.",
//     image: "./images/hair-pro-1.jpeg",
//   },
//   {
//     title: "Homeopathic",
//     detail:
//       "An alternative approach to medicine based on the belief that natural substances, prepared in a special way and used most often in very small amounts, restore health. According to these beliefs, in order for a remedy to be effective, it must cause in a healthy person the same symptoms being treated in the patient. Also called homeopathy.",
//     image: "./images/Homeopathic.jpg",
//   },
//   {
//     title: "Aesthetic",
//     detail:
//       "Aesthetic medicine is a branch of modern medicine that focuses on altering cosmetic appearance through the treatment of conditions including scars, skin laxity, wrinkles, moles, liver spots, excess fat, cellulite, unwanted hair, skin discoloration, and spider veins.",
//     image: "./images/Aesthetic.jpg",
//   },

//   {
//     title: "Hydra facial",
//     detail:
//       "A HydraFacial is a facial treatment using a patented device to deliver exfoliation, cleansing, extraction, and hydration to the face. This system uses a vortex swirling action to deliver hydration and to remove dead skin, dirt, debris, and impurities while cleaning and soothing your skin.",
//     image: "./images/Hydrafacial-Benefits.jpg",
//   },


//   {
//     title: "BB Glow Treatment",
//     detail:
//       "The BB glow treatment is a semi-permanent makeup and non-surgical procedure that uses a highly effective tinted pigments. The pigment is applied using a microneedle to penetrate the skin, it adds nutrients as well as desired colour which produces natural collagen.",
//     image: "./images/BB-Glow-Main-Banner.jpg",
//   },


//   {
//     title: "Radio Cautery - mole /wart/freckles removal",
//     detail:
//       "Curettage and cautery is a non-invasive treatment that involves scraping off a skin lesion, such as a mole. Sometimes, mole removal treatment area is cauterized after the mole is removed. This is to prevent bleeding without the use of stitches that need to be removed after treatment.",
//     image: "./images/Radiofrequency-Cautery-in-chennai.jpg",
//   },
// ];
