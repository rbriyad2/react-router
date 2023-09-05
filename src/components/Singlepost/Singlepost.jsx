import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Singlepost.css'


const Singlepost = ({post}) => {
    const {id, title}=post;
    const navigate =useNavigate()
    const handelnavigate=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='singlepost'>
            <h4>Id: {id}</h4>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button className='showpostdetailbtn' onClick={handelnavigate}>Show Post Details</button>
        </div>
    );
};

export default Singlepost;