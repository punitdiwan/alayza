import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Index from '../Components/Blogs/Index';

const Blogs = () => {
  return (
    <>
      <section className="blogs-main">
        <Header />
        <div className="about-header">
          <h1>Blogs</h1>
          <p>Alayza Life Science</p>
              </div>
              <Index/>

        <Footer />
      </section>
    </>
  );
};

export default Blogs;
