import React from "react";
import CountryCard from "./CountryCard";


function AllCountries(props) {
  return (
    <div>
      {props.data.map((item) => {
        return <CountryCard country={item} main = {props.main} setSingleData = {props.setSingleData} />;
      })}
    </div>
  );
}

export default AllCountries;
