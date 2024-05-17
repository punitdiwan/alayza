import React, { useState,useEffect } from "react";
import Form from "../Form";
// import { useQuery } from "graphql-hooks";
// import * as constants from "../../Components/Contants";

const Aboutdoctor = () => {



  const [data, setData] = useState()


  const getAboutDrData = async () => {
    const response = await fetch("https://cms.maitretech.com/alayza/items/about?fields=*.*.*")
    const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    getAboutDrData()
  }, [])




  // const { data } = useQuery(constants.about);

  return (
    <>
      <section className="about-doctor">
        <div>
          {data?.map((item) => (
            <div key={item.id} className="about-doctor-1">
              <div className="doctors-image">
                <img
                  src={item?.image?.data?.full_url}
                  alt="about"
                />
              </div>
              <div className="about-doctor-2">
                <p></p>
                <h1>{item.name}</h1>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Aboutdoctor;
