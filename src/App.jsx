import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Homepage from "./sections/homepage/Homepage";
import "./App.css";
import Search from "./components/search/Search";

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
      <Search
        countriesData={countriesData}
        setFilteredCountriesData={setFilteredCountriesData}
      />
      <Homepage filteredCountriesData={filteredCountriesData} />
    </div>
  );
}

export default App;
