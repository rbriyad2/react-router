import React from "react";
import "./CountryInfo.css";
import { useNavigate } from "react-router-dom";


const CountryInfo = (props) => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  const { name, cca3, flags } = props.country;
  return (
    <div className="countryInfo">
      <h2>Your Country Details</h2>
      <h3>{name.common}</h3>
      <h2>Country Code:{cca3}</h2>
      <h3>Official Name: {name.official}</h3>
      <img src={flags.png} alt="" />
      <br /><br />
      <button onClick={goback}>Go Back</button>
    </div>
  );
};

export default CountryInfo;
