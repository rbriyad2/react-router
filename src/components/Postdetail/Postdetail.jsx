import React from "react";
import { useLoaderData } from "react-router-dom";
import './Postdetail.css';

const Postdetail = () => {
  const post = useLoaderData();
  const { title, body, id } = post;
  return (
    <div className="postdetail">
      <h3>Post Details for: {id}</h3>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Postdetail;
