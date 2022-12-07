import React from 'react'
import {  Link } from 'react-router-dom';
import "./CSS/countryCard.css"

function CountryCard({country}) {
  return (
    <div className="card">
      <div>
        <img src={country.flags.png} alt="flag" className="image" />
      </div>
      <div className="content">
        <Link to="/details">
          <h3>{country.name.common}</h3>
        </Link>

        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}

export default CountryCard
