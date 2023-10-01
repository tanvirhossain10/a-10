import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('services.json')
            .then(function (response) {
                // handle success
                setServices(response.data);

            })
            .finally(function (response) {
                // always executed

            });
        // fetch('services.json')
        //     .then(res => res.json())
        //     .then(data => setServices(data))
    }, [])
    // console.log(services)
    return [services];
};

export default useService;