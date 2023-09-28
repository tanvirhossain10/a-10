import React from 'react';

const Service = ({ servic }) => {
    const { name, price, id, body, img } = servic;
    return (
        <div className='border border-primary col-sm-4  w-25 mx-auto my-4 position-relative'>
            <h3>{name}</h3>
            <img src={img} alt="" width={"60%"} className='rounded mx-auto d-block ' />
            <p><small>{body}</small></p>
            <p className='d-flex align-items-center mb-5 '>Price:<span className='text-warning font-weight-bold display-4 mt-3 d-block  '>${price}</span></p>
            <button className='mb-2 bg-primary text-white rounded border-0 p-2 position-absolute bottom-0 ml-10 start-50'>Buy now</button>
        </div>
    );
};

export default Service;