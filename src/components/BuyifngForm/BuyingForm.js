import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const BuyingForm = (async) => {
    const { id } = useParams();
    const location = useLocation();
    const data = location.state;
    const { name, img, body, } = data || {};
    useEffect(() => {
        fetchItems();

    }, [])

    const fetchItems = async () => {

        fetch("/services.json")
            .then(res => res.json())
            .then(data => (data))


            ;
    };

    return (
        <div>
            <h2>Thanks for buying the service.All necessary information will provide to your email.</h2>
        </div>
    );
};

export default BuyingForm; <h2>This is for buying</h2>