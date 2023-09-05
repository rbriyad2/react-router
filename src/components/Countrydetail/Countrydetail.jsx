import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countrydetail = () => {
    const country =useLoaderData()
    return (
        <div>
            <h4>{country.name.common}</h4>
        </div>
    );
};

export default Countrydetail;