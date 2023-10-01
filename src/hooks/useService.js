import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('services.json')
            .then(function (response) {
                setServices(response.data);

            })
            .finally(function (response) {

            });
    }, [])
    return [services];
};

export default useService;