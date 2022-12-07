import React from 'react'

function Details({singleCountry}) {
    let [country] = singleCountry
  return (
    <div>
        <button>Back</button>
        <div>
            <img src="" alt="" />
        </div>

        <div>
            <h3>{country.name.common}</h3>
            <p></p>
        </div>
    </div>
  )
}

export default Details
