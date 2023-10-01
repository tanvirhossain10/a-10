import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from "../../images/carosol/homepage2.jpg"
import Service from '../Serive/Service';
import Footer from '../Footer/Footer';
import BuyingForm from '../BuyifngForm/BuyingForm';
import useService from '../../hooks/useService';
import { useParams } from 'react-router-dom';

const Home = () => {


    const [services] = useService();
    return (
        <div className='container p-0 w-100'>

            <div className="page-name text-center ">
                <h1 className='text-secondary'>Hard </h1>
                <h2>Fitness</h2>
            </div>
            <div className="" >
                <img className='w-100 mx-auto d-block' src={banner} alt="" />
            </div>
            <h2 className='text-warning text-center'>Our Services</h2>
            <div className="service-section  p-3  mt-3 mb-5">

                {
                    services.map(service => <Service servic={service} key={service.id}></Service>)
                }
            </div>

        </div>
    );
};

export default Home;