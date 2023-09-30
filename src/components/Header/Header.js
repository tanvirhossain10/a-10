import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css"
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = e => {
        signOut(auth)
    }
    return (


        <nav className='d-lg-flex sticky-top mb-4 justify-content-around py-3 bg-info-subtle  align-items-center  text-secondary

        ' lg="bg-danger">


            <NavLink className='text-decoration-none text-secondary-emphasis' to="/">Home</NavLink>
            <NavLink className='text-decoration-none text-secondary-emphasis' to="/blogs">Blogs</NavLink>
            {!user ? <NavLink className='text-decoration-none text-secondary-emphasis' to="/login">Login</NavLink> : ''}
            {user ? <NavLink className="className='text-decoration-none text-secondary-emphasis" to="/login" onClick={handleSignOut}>SignOut</NavLink> : <NavLink className='text-decoration-none text-secondary-emphasis' to="/signup">Signup</NavLink>}
        </nav>

    );
};

export default Header;