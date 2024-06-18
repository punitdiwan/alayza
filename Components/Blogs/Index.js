import React, { useEffect, useState } from "react";
// import Form from '../Form';
import Link from "next/link";
import Header from '../Header'
import Footer from '../Footer'

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const [blog, setBlog] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch('https://cms.maitretech.com/alayza/items/blogs?fields=*.*');
      const result = await res.json();
      setBlog(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async (id) => {
    try {
      const res = await fetch(`https://cms.maitretech.com/alayza/items/blogs/${id}?fields=*.*`);
      const result = await res.json();
      setData(result.data);
      setToggle(true);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      {/* <Header /> */}
      {toggle ? (
        <section className="about-doctor">
          <div>
            <div className="about-doctor-1">
              <div className="doctors-image">
                <img
                  src={data?.image?.data?.full_url}
                  alt="about"
                />
              </div>
              <div className="about-doctor-2">
                <h1>{data?.title}</h1>
                <div style={{ whiteSpace: "pre-line" }}>{data?.detail}</div>
                
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="youtube-main">
            <div className="product-1">
              <h1 style={{ color: '#005392' }}>Blogs</h1>
              <img src="./images/heading-art-01.svg" alt="heading art" />
            </div>
          </section>
          <section className="blog-card-main">
            {blog?.map((item) => (
              <div className="card" key={item.id} onClick={() => getDataById(item.id)}>
                <div className="card_image">
                  <img src={item?.image?.data?.full_url} alt={item.title} />
                  
                </div>
                <div className="card_content">
                  <h2 className="card_title">{item.title}</h2>
                  <Link href="/Blogs" >
                      <text style={{color:'black',fontFamily:'bold', fontSize:20 }} >Read More</text>
                          </Link>
                  {/* <p className="card_text">{item?.detail}</p> */}
                </div>
              </div>
            ))}
          </section>
          <section className="youtube-main">
            <Link href="/Blogs" className="btn-grad" style={{ width: "300px" }}>
              View All
            </Link>
          </section>
        </>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Index;
