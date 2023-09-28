import React, { useEffect, useState } from 'react';
import banner from "../../images/carosol/homepage2.jpg"
import Service from '../Serive/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect((() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }), [])
    return (
        <div className='container'>
            <div className="page-name text-center ">
                <h1 className='text-secondary'>Hard </h1>
                <h2>Fitness</h2>
            </div>
            <div className="" >
                <img style={{ height: "10%" }} className='w-100 ' src={banner} alt="" />
            </div>
            <div className="service-section row">
                {
                    services.map(service => <Service servic={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Home;