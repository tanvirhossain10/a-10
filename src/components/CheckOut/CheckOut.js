import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const CheckOut = () => {
    const { id } = useParams();
    const location = useLocation();
    const [service, setService] = useState({})
    const data = location.state;
    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => {
                const filteredService = data.filter((serviceDetails) => serviceDetails.id === id * 1);
                setService(...filteredService);
            });
    }, []);
    const { name, img, body } = service;


    const navigate = useNavigate();
    const [buy, setBuy] = useState(true);
    const [notBuy, setNotBuy] = useState(true);
    const handleBuy = () => {
        if (buy) {
            navigate(`/checkout/${+id}/buy`);
        }
    }
    const handleIgnore = () => {
        if (notBuy) {
            navigate('/');
        }
    }



    return (
        <div className='container w-50 my-5'>;
            <h2>Your selected service information:</h2>
            <h3>{name}</h3>
            <img src={img} className='w-100' alt="" />
            <p>
                <small>{body}</small>
            </p>
            <div className='w-50 mx-auto '>
                <button className='bg-primary text-white px-5' onClick={handleBuy}>Yes</button> <button onClick={handleIgnore} className='bg-danger text-white px-5'> No</button>
                <div className="particularService">
                </div>
            </div>
        </div>
    );
};

export default CheckOut;