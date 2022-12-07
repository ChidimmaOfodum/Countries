import "./App.css";
import React, { useState, useMemo } from "react";
import AllCountries from "./Components/AllCountries";
import Navigation from "./Components/Navigation";
import Details from "./Components/Details";
import { Routes, Route} from "react-router-dom";


function App() {
  //This data changes depending on the input and filter terms
  const [data, setData] = useState([]);

  //Represents default data
  const [main, setMain] = useState([]);

  //data for the detail page
  const [detailData, setDetailData] = useState([]);

  useMemo(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setMain(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation main={main} setData={setData} />
              <AllCountries data={data} setSingleData = {setDetailData} main = {main}/>
            </>
          }
        />
        <Route path="/details" element = {<Details singleCountry={detailData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
