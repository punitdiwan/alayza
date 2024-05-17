import React,{useEffect,useState} from "react";
import Form from '../Form';

const Blogcard = () => {
  const [blog,setBlog]=useState([])
  useEffect(()=>{
    getdata()
  },[])
  const getdata = async()=>{
    try {
      const res = await fetch('https://cms.maitretech.com/alayza/items/blogs?fields=*.*')
      const data = await res.json()
      setBlog(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <section className="blog-card-main" >
        <div className="main" >
          {/* <h1>Responsive Card Grid Layout</h1> */}
          <ul className="cards" >
           
           {
            blog?.map((item)=>(
              <li className="cards_item" key={item.id}>
              <div className="card">
                <div className="card_image">
                  <img src={item?.image?.data?.full_url} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    {item.title}
                  </h2>
                  <p className="card_text">
                    {item?.detail}
                  </p>
                  {/* <button className="btn-grad" style={{width: "100%",marginLeft: "0"}}>Read More</button> */}
                </div>
              </div>
            </li>
            ))
           }
            
          </ul>
        </div>
        {/* <Form/> */}
      </section>
    </>
  );
};

export default Blogcard;
