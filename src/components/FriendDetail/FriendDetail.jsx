import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div className='frienddetail'>
            <h2>Everything about this person ID: {friend.id}</h2>
            <h4>Name: {friend.name}</h4>
            <h5>User Name: {friend.username}</h5>
            <h5>Website: {friend.website}</h5>
        </div>
    );
};

export default FriendDetail;