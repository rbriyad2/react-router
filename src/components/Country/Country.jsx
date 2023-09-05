import React from "react";
import { Link } from "react-router-dom";
import './Country.css';


const Country = ({ country }) => {
  const { name, ccn3} = country;
  return (
    <div className="countryLink">
      <ul>
        <Link to={`/country/${ccn3}`}>{name.common}</Link>
        
      </ul>

    </div>
  );
};

export default Country;
