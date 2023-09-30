import React, { useEffect, useState } from 'react';
import banner from "../../images/carosol/homepage2.jpg"
import Service from '../Serive/Service';
import Footer from '../Footer/Footer';
import BuyingForm from '../BuyifngForm/BuyingForm';
import useService from '../../hooks/useService';
import { useParams } from 'react-router-dom';

const Home = () => {
    const checkOutId = useParams();

    const [services] = useService();
    return (
        <div className='container'>

            <div className="page-name text-center ">
                <h1 className='text-secondary'>Hard </h1>
                <h2>Fitness</h2>
            </div>
            <div className="" >
                <img style={{ height: "10%" }} className='w-100 ' src={banner} alt="" />
            </div>
            <div className="service-section row mt-3 mb-5">
                <h2 className='text-warning text-center'>Our Services</h2>
                {
                    services.map(service => <Service servic={service} key={service.id}></Service>)
                }
            </div>

        </div>
    );
};

export default Home;