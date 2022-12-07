import React from 'react'
import {  Link } from 'react-router-dom';
import "./CSS/countryCard.css"

function CountryCard({country, main, setSingleData}) {

//handler function that retrieves the name of the country that was clicked. This name is used to filter the dataset which is rendered on another page.

  function handleLink(event) {
    const name = event.currentTarget.innerText
    let filtered = main.filter((x) => x.name.common === name)
    setSingleData(filtered)
  }

  return (
    <div className="card">
      <div>
        <img src={country.flags.png} alt="flag" className="image" />
      </div>

      <div className="content">
        <Link to="/details">
          <h3 onClick={handleLink}>{country.name.common}</h3>
        </Link>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}

export default CountryCard
