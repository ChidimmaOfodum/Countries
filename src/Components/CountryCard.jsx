import React from 'react'

function CountryCard({country}) {
  return (
    <div>
      <div>
        <img src={country.flags.png} alt="flag" />
      </div>
      <h3>{country.name.common}</h3>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

export default CountryCard
