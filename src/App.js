import "./App.css";
import React, { useState, useMemo } from "react";
import AllCountries from "./Components/AllCountries";
import Navigation from "./Components/Navigation";
import { Routes, Route} from "react-router-dom";


function App() {
  const [data, setData] = useState([]);
  const [main, setMain] = useState([]);

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
              <AllCountries data={data} />
            </>
          }
        />
        <Route path="/details" element = {<p>This is a text</p>} />
      </Routes>
    </div>
  );
}

export default App;
