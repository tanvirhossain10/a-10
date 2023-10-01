
import React, { createContext, useState } from 'react';
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import BuyingForm from '../BuyifngForm/BuyingForm';
import './ServiceSection.css'
import classes from './Service.module.css';
export const RingContext = createContext('diamond');
const Service = ({ servic }) => {




    const navigate = useNavigate();
    const handleCheckOut = async e => {

        await navigate("/checkout/" + id, { state: e });


    }
    const { name, price, body, img, id } = servic;


    ;


    return (

        // <div className={classes["singleService d-none border singleService border-primary single-service p-2  w-100 mx-auto my-4"]}>
        <div className="border singleService border-primary single-service p-2 position-relative  w-100 mx-auto my-4 ">
            < h3 > {name}</h3 >
            <img src={img} alt="" className='rounded mx-auto  w-100' />
            < p > <small>{body}</small></p >
            <p className='d-flex align-items-center mb-5 '>Price:{price}<span className='text-warning font-weight-bold display-4 mt-3 d-block  '>${price}</span></p>

            <button onClick={() => { handleCheckOut(servic) }} className='mb-2 bg-primary text-white rounded border-0 p-2 position-absolute bottom-0     start-50  start-50'>Buy now</button>
        </div >


    );
};

export default Service;