import React from 'react';
import { useRouteMatch } from "react-router-dom";

import './Footer.css'
// import { useMatch } from 'react-router-dom';

const Footer = () => {
    // const match = useRouteMatch({
    //     path: ["/", "/home/blog"],
    //     exact: true
    // });
    // const match = useMatch({
    // pathname: ["/", "/blog"],
    // exact: true
    // });
    return (
        <footer className={` text-center text-white bg-dark  py-2 fot`}>
            <p className=' d-inline '><small >All Rigth Reserved &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;