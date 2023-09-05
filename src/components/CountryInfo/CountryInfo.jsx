import React from "react";
import './CountryInfo.css'

const CountryInfo = (props) => {
  const { name, cca3, flags} = props.country;
  return (
    <div className="countryInfo">
      <h2>Your Country Details</h2>
      <h3>{name.common}</h3>
      <h2>Country Code:{cca3}</h2>
      <h3>Official Name: {name.official}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default CountryInfo;
