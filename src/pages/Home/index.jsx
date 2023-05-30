import React from "react";
import blogs from "../../static/data/blogs";
import BlogCard from "../../components/BlogCard";
import "./styles.css";
import QuotesCarousel from "../../components/QuotesCarousel";
import quotes from "../../static/data/quotes";
import background from "../../static/images/background.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header-container">
        <div className="background_image_container">
          <img src={background} className="background_image" alt="" />
        </div>
        <div className="home-banner">
          <h1>ALL YOU NEED IS A LITTLE MOTIVATION TO GET STARTED!!!</h1>
        </div>
        <div className="quote-carousel-container">
          {/* {quotes.map((quotes,index)=>(<QuotesCarousel key={`quote-${index}`} data={quotes}/>) )}         */}
          <QuotesCarousel data={quotes} />
        </div>
      </div>
      <div className="blogs-title">
        <h1>Technology Blogs</h1>
      </div>
      <div className="technology-blogs">
        {blogs.technology.map((blog, index) => {
          return (
            <div>
              <BlogCard key={`tech-blog-${index}`} data={blog} />
            </div>
          );
        })}
      </div>
      <div className="blogs-title">
        <h1>Research Blogs</h1>
      </div>
      <div className="research-blogs">
        {blogs.research.map((blog, index) => {
          return (
            <div>
              <BlogCard key={`research-blog-${index}`} data={blog} />
            </div>
          );
        })}
      </div>
      {/* <div className="research-blogs">
                {
                    blogs.research.map((blog, index) => {
                        return <div key={`research-blog-${index}`}>{blog.title}</div>
                    })
                }

            </div> */}
    </div>
  );
};

export default Home;
