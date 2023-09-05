import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryInfo from '../CountryInfo/CountryInfo';

const Countrydetail = () => {
    const country =useLoaderData()
    return (
        <div>
            
            {
                country.map(country => <CountryInfo country={country}></CountryInfo>)
            }
        </div>
    );
};

export default Countrydetail;