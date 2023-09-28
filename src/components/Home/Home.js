import React from 'react';
import banner from "../../images/carosol/homepage1.jpg"

const Hoe = () => {
    return (
        <div>
            <div className="page-name text-center">
                <h1 className='text-secondary'>Hard </h1>
                <h2>Fitness</h2>
            </div>
            <img className='w-100' src={banner} alt="" />
        </div>
    );
};

export default Hoe;