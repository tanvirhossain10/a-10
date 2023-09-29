import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const CheckOut = () => {
    const location = useLocation();
    const data = location.state;
    const { name, img, body } = data;
    const navigate = useNavigate();
    const [buy, setBuy] = useState(true);
    const [notBuy, setNotBuy] = useState(true);
    const handleBuy = () => {
        if (buy) {
            navigate("/checkout/buy");
        }
    }
    const handleIgnore = () => {
        if (notBuy) {
            navigate('/')
        }
    }


    return (
        <div className='container w-50 my-5'>
            <h2>Your selected service information:</h2>
            <h3>{name}</h3>
            <img src={img} alt="" />
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