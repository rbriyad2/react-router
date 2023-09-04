import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

    const {name, id, phone, email}=friend
    return (
        <div className='friend'>
            <h4>Id Number: {id}</h4>
            <h4> Name: {name}</h4>
            <h4>Phone: {phone}</h4>
            <h5>Email: {email}</h5>
            <p><Link to={`/friend/${id}`}>Shoe Me Detail</Link></p>
        </div>
    );
};

export default Friend;