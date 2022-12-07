import "./App.css";
import React, { useState, useMemo } from "react"
import AllCountries from "./Components/AllCountries";
import Navigation from "./Components/Navigation";

function App() {

  const [data, setData] = useState([]);
  const [main , setMain] = useState([]);

  useMemo(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      setMain(data)});

  }, []);

 return (
  <div className = "App">
    <Navigation main= {main} setData = {setData}/>
    <AllCountries data = {data}/>
  </div>
 )
}

export default App;
