import React, { useMemo, useState } from "react";
import CountryCard from "./CountryCard";


function AllCountries() {
  const [data, setData] = useState([])

  useMemo(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])
  return (
    <div>
      {data.map((item) => {
        return <CountryCard country={item} />;
      })}
    </div>
  );
}

export default AllCountries;
