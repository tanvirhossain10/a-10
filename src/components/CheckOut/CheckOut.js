import React, { useContext, useEffect, useState } from 'react';
import { RingContext, SelectedServiceContext } from '../Serive/Service';
import { useNavigate, useParams } from 'react-router-dom';

const CheckOut = () => {
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
        <div>
            <h2>Do you sure want to buy the service</h2>
            <button onClick={handleBuy}>Yes</button> <button onClick={handleIgnore}> No</button>
            <div className="particularService">
            </div>
        </div>
    );
};

export default CheckOut;