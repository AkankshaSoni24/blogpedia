import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();

  function navigateToBlogDetailsPage() {
    navigate("/blogpedia/blog", { state: data });
  }

  return (
    <div className="card-container" onClick={navigateToBlogDetailsPage}>
      <div className="card-desc">
        <img className="card-images" src={data.image} alt={data.title} />
        <div className="card-title">{data.title}</div>
      </div>
    </div>
  );
};

export default BlogCard;
