import React,{useEffect,useState} from "react";
import Form from '../Form';
import Link from "next/link";
import Header from '../Header'
import Footer from '../Footer'


const Index = () => {
  const [toggle,settoggle]=useState(false)
  const [blog,setBlog]=useState([])
  const [data,setDate]=useState({})
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
  const getsDate = async(id)=>{
    try {
      const res = await fetch(`https://cms.maitretech.com/alayza/items/blogs/${id}?fields=*.*`)
      const data = await res.json()
      console.log(data)
      setDate(data.data)
      settoggle(true)
    } catch (error) {
      console.log(error)
    }
  }
  if (toggle) {
    <>
         <Header />
      <section className="about-doctor">
        <div>
            <div  className="about-doctor-1">
              <div className="doctors-image">
                <img
                  src={data?.image?.data?.full_url}
                  alt="about"
                />
              </div>
              <div className="about-doctor-2">
               
                <h1>{data?.title}</h1>
                {/* <p>{data?.price}</p> */}
                <p>{data?.detail}</p>
              </div>
            </div>
        </div>
      </section>
      
      <Footer />
    </>
    
  }
  return (
    <>
    <div className="product-1">
           
           <h1 style={{color:'#005392',marginLeft:'45%',marginTop:30}}>Blogs</h1>
           <img style={{marginLeft:'42%'}} src="./images/heading-art-01.svg" />
         </div>
      <section className="blog-card-main" >
        <div className="main" >
          {/* <h1>Responsive Card Grid Layout</h1> */}
          
          <ul className="cards" >
           
           {
            blog?.map((item)=>(
              
              <li className="cards_item" key={item.id} onClick={()=>getsDate(item.id)}>
                
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
      <Link href="/Blogs" className="btn-grad" style={{ width: "300px",display:'flex',alignItems:'center',flexDirection:'column', marginLeft:'40%' }}>
          View All
        </Link>
    </>
  );
};

export default Index;
