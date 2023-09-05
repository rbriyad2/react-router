import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import './Postdetail.css';

const Postdetail = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const goback =()=>{
    navigate(-1)
  }
  const { title, body, id } = post;
  return (
    <div className="postdetail">
      <h3>Post Details for: {id}</h3>
      <h3>{title}</h3>
      <p>{body}</p>
      <button className="goback" onClick={goback}>Go Back</button>
    </div>
  );
};

export default Postdetail;
