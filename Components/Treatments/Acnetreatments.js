import React,{useState,useEffect} from "react";
import { useQuery } from "graphql-hooks";
import * as constants from "../Contants";


const Acnetreatments = () => {

  const [data, setData] = useState()


  const getDirectorData = async () => {
    const response = await fetch('https://cms.maitretech.com//zebacms/items/treatments?fields=*.*')
    const data = await response.json()
    setData(data.data)
  }

  useEffect(() => {
    getDirectorData()
  }, [])

  return (
    <>
      <section className="acne-treatment">
        {/* {treatmentData.map((item) => { */}
        {/* return ( */}
        {
          data?.map((item)=>{
            return (<>
                    <div className="treatment-maped">
            <div className="treatment-maped-1">
              <h4 style={{fontWeight : "bolder", borderBottom : "5px solid black", display : "inline"}}>{item.treatment_name}</h4>
              <h5>{item.treatment_data}</h5>
            </div>
            <img
            style={{height: "400px", width : "300px"}}
              src={item?.treatment_image.data?.full_url}

            />
          </div>
            </>)
          })
        }
      </section>
    </>
  );
};

export default Acnetreatments;
