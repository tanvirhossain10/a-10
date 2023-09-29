import React, { createContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import BuyingForm from '../BuyifngForm/BuyingForm';
export const RingContext = createContext('diamond');
const Service = ({ servic }) => {
    const [set, setSet] = useState(1);
    const [selectedService, setSelelctedService] = useState([]);


    const navigate = useNavigate();
    const handleCheckOut = async e => {
        const { name, id, img, body, price } = e;

        await navigate("/checkout");

    }
    const { name, price, body, img } = servic;


    ;


    return (

        <div className='border border-primary col-sm-4  w-25 mx-auto my-4 position-relative'>
            <h3>{name}</h3>
            <img src={img} alt="" width={"60%"} className='rounded mx-auto d-block ' />
            <p><small>{body}</small></p>
            <p className='d-flex align-items-center mb-5 '>Price:{price}<span className='text-warning font-weight-bold display-4 mt-3 d-block  '>${price}</span></p>

            <button onClick={() => { handleCheckOut(servic) }} className='mb-2 bg-primary text-white rounded border-0 p-2 position-absolute bottom-0 ml-10 start-50'>Buy now</button>
        </div>


    );
};

export default Service;