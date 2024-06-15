// pages/blogs/[slug].js
// import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import {useRouter} from "next/router";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data,setDate]=useState({})
//   const {Product } = router.query;
  const id = slug;

  useEffect(() => {
    // Access full URL or manipulate as needed
    // console.log('Current URL:', window.location.href);
    getDate()
  }, [router]);
  const getDate = async()=>{
    try {
      const res = await fetch(`https://cms.maitre tech.com/alayza/items/blogs/${id}?fields=*.*`)
      const data = await res.json()
      console.log(data)
      setDate(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header />
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
                    {/* <p>{data?.price}</p> */}
                    <p>{data?.detail}</p>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</>
  );
};

export default BlogPage;
