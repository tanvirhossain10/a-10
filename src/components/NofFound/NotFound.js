import React, { createContext, useState } from 'react';
import useService from '../../hooks/useService';
export const BingContext = createContext('')
const NotFound = () => {
    const [services] = useService();
    return (
        <div>
            <h2>Page not found</h2>
        </div>
    );
};

export default NotFound;