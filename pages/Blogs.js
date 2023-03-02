import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Blogcard from '../Components/Blogs/Blogcard';

const Blogs = () => {
  return (
    <>
      <section className="blogs-main">
        <Header />
        <div className="about-header">
          <h1>Blogs</h1>
          <p>Dr. Zeba Quadiri/ Blogs</p>
              </div>
              <Blogcard/>

        <Footer />
      </section>
    </>
  );
};

export default Blogs;
