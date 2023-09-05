import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  console.log(country);
  const { name, ccn3} = country;
  return (
    <div>
      <ul>
        <Link to={`/country/${ccn3}`}>{name.common}</Link>
      </ul>
    </div>
  );
};

export default Country;
