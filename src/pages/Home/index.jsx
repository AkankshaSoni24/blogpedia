import React from "react";
import blogs from "../../data/blogs";
import BlogCard from "../../components/BlogCard";
import "./styles.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* <Carousel /> */}
            <div className="blogs-title"><h1>Technology Blogs</h1></div>
            <div className="technology-blogs">
                {   
                    blogs.technology.map((blog, index) => {
                        return (<div><BlogCard key={`tech-blog-${index}`} data={blog}/>
                        </div>)
                    })
                }
            </div>
            <div className="blogs-title"><h1>Research Blogs</h1></div>
            <div className="research-blogs">
                {
                    blogs.research.map((blog, index) => {
                        return (<div><BlogCard key={`research-blog-${index}`} data={blog}/>
                        </div>)
                    })
                }
            </div>
            {/* <div className="research-blogs">
                {
                    blogs.research.map((blog, index) => {
                        return <div key={`research-blog-${index}`}>{blog.title}</div>
                    })
                }

            </div> */}
        </div>
    )
}

export default Home