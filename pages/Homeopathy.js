import React, { useEffect, useState } from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const pathy = () => {
  const [data, setData] = useState()


  const getDirectorData = async () => {
    const response = await fetch('https://cms.maitretech.com/zebacms/items/homeopathy?fields=*.*')
    const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    getDirectorData()
  }, [])



    return (
        <section className="gallery-main1" style={{ backgroundColor: "white" }}>
            <Header />
            <div className="about-header">
                <h1>Benefits of Homeopathy</h1>
            </div>
            <img src="./images/pathy.jpeg" alt="" />
            <div className="about-doctor-6">



                {
                    data?.map((item)=>{
                        return (<>
                        <h4 style={{marginLeft: "2rem", fontWeight: "bolder", display : "inline", borderBottom : "5px  solid black"}}>{item.homeopathy_heading}</h4>
                        <p>{item.homeopathy_data}</p>
                        </>)
                    })

                }
            </div>

            <Footer />

        </section>
    )
}

export default pathy