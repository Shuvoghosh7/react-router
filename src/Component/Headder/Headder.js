import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Headder = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/About'>About</Link>
            {/* <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friends'>Friends</CustomLink>
            <CustomLink to='/about'>About</CustomLink> */}
        </div>
    );
};

export default Headder;