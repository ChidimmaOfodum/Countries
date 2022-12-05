import React from "react";
import CountryCard from "./CountryCard";
import countryData from "../data/countryData";

function AllCountries() {
  return (
    <div>
      {countryData.map((item) => {
        return <CountryCard country={item} />;
      })}
    </div>
  );
}

export default AllCountries;
