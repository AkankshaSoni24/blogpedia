import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ data }) => {
    const navigate = useNavigate();

    function navigateToBlogDetailsPage() {
        navigate('/blog', { state: data })
    }

    return (
        <div className='card-container' onClick={navigateToBlogDetailsPage}>
            <div>
                <img className="card-images" src={data.image} alt={data.title}/>
            </div>
            <div>{data.title}</div>
        </div>
    )
}

export default BlogCard