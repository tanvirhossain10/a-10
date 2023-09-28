import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='text-center text-white bg-dark py-1'>
            <p className='mt-3'><small >All Rigth Reserved &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;