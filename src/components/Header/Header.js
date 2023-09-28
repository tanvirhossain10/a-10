import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <nav className='d-lg-flex sticky-top mb-4 justify-content-around py-3 bg-info-subtle  align-items-center  text-secondary

        ' lg="bg-danger">


            <NavLink className='text-decoration-none text-secondary-emphasis' to="/">Home</NavLink>
            <NavLink className='text-decoration-none text-secondary-emphasis' to="/blogs">Blogs</NavLink>
            <NavLink className='text-decoration-none text-secondary-emphasis' to="/Login">Login</NavLink>
            <NavLink className='text-decoration-none text-secondary-emphasis' to="/signup">Signup</NavLink>
        </nav>

    );
};

export default Header;