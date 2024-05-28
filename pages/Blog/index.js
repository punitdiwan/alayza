// import React from 'react'
import React, { useEffect, useState } from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Link from "next/link";

const Blog = () => {
    const [toggle, settoggle] = useState(false)
    const [blog, setBlog] = useState([])
    const [data, setDate] = useState({})
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
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
            <Header />
            <section className="youtube-main">
            <div className="product-1">

                <h1 style={{ color: '#005392',  }}>Blogs</h1>
                <img style={{  }} src="./images/heading-art-01.svg" />
            </div>
            </section>
            <section className="blog-card-main" >
                <div className="main" >
                    {/* <h1>Responsive Card Grid Layout</h1> */}

                    <ul className="cards" >

                        {
                            blog?.map((item) => (
                                <li className="cards_item" key={item.id} >
                                    <Link  href={`Blog/${item.id}`}>

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

                                </Link>
                                </li>

                            ))
                        }

                    </ul>
                </div>
                {/* <Form/> */}
            </section>
            <Footer />
            {/* <Link href="/Blogs" className="btn-grad" style={{ width: "100px",height:40,alignItems:'center',marginLeft:725 }}>
            View All
          </Link> */}
        </>
    );
};


export default Blog
