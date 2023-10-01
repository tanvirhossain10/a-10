import React from 'react';
import { useRouteMatch } from "react-router-dom";

import './Footer.css'

const Footer = () => {
    return (
        <footer className={` text-center text-white bg-dark  py-2 fot`}>
            <p className=' d-inline '><small >All Rigth Reserved &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;