import React from 'react'

function CountryCard({country}) {
  return (
    <div>
      <div>
        <img src={country.flags.png} alt="flag" />
      </div>
      <h3>{country.name.common}</h3>
      <p>{country.population}</p>
      <p>{country.region}</p>
      <p>{country.capital[0]}</p>
    </div>
  );
}

export default CountryCard
