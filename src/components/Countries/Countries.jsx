import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div>
            <h2>This data From Countries: {countries.length}</h2>
            <ul>
            {
                countries.map(country => <Country
                key={country.ccn3}
                country={country}></Country>)
            }
            </ul>
        </div>
    );
};

export default Countries;