import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
            <ActiveLink to='/post'>Post</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
        </nav>
    );
};

export default Header;