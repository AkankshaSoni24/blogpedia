import React, { useState, useEffect } from "react";
import "./styles.css";

const QuotesCarousel = ({ data }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current < data.length - 1)
        setCurrent(current + 1)
      else
        setCurrent(0)
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [current])

  return (<div className="carousel-container">
    <div className="carousel-quote">{data[current]}</div>
  </div>
  )
}

export default QuotesCarousel