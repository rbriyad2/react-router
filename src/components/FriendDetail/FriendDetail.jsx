import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const friend = useLoaderData();
const navigate = useNavigate();
const goback=()=>{
    navigate(-1)
}
    return (
        <div className='frienddetail'>
            <h2>Everything about this person ID: {friend.id}</h2>
            <h4>Name: {friend.name}</h4>
            <h5>User Name: {friend.username}</h5>
            <h5>Website: {friend.website}</h5>
            <button onClick={goback}>Go Back</button>
        </div>
    );
};

export default FriendDetail;