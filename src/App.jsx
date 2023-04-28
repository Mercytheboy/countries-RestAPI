import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./sections/homepage/Homepage";
import CountryDetails from "./sections/countrydetails/CountryDetails";
import "./App.css";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  async function fetchCountriesData() {
    const response = await fetch(url);
    const countries = await response.json();
    setCountriesData(countries);
    setFilteredCountriesData(countries);
  }

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Homepage
                countriesData={countriesData}
                filteredCountriesData={filteredCountriesData}
                setFilteredCountriesData={setFilteredCountriesData}
              />
            </>
          }
        />

        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
