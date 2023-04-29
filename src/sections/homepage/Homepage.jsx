import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./homepage.css";

function Homepage() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);

  const navigate = useNavigate();

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

  const [searchNation, setSearchNation] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  function handleSearchNationChange(e) {
    const newSearchNation = e.target.value;
    setSearchNation(newSearchNation);

    if (newSearchNation.trim() === "") {
      setFilteredCountriesData(countriesData);
    } else {
      filterData(newSearchNation, filterByRegion);
    }
  }

  function handleRegionChange(e) {
    const selectedRegion = e.target.value;
    setFilterByRegion(selectedRegion);
    filterData(searchNation, selectedRegion);
  }

  function filterData(searchNation, region) {
    const filteredData = countriesData.filter(countryData => {
      const matchesSearchTerm =
        countryData.name.common
          .toLowerCase()
          .indexOf(searchNation.toLowerCase()) !== -1;
      const matchesRegion = region === "" || countryData.region === region;
      return matchesSearchTerm && matchesRegion;
    });
    setFilteredCountriesData(filteredData);
  }

  return (
    <section className="homepage__container">
      <section className="search__container">
        <form className="form__control">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for a country..."
            value={searchNation}
            onChange={handleSearchNationChange}
            className="search-input"
          />
          {/* <button className="search-btn">
          <FaSearch />
        </button> */}
        </form>

        <select
          id="region-select"
          onChange={handleRegionChange}
          value={filterByRegion}>
          <option value="">Filter by Region</option>
          {[...new Set(countriesData.map(countryData => countryData.region))]
            .sort()
            .map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
        </select>
      </section>
      <main className="country-grid">
        {filteredCountriesData.map(country => {
          const { ccn3, name, population, region, capital, flags } = country;
          return (
            <article
              key={ccn3}
              className="country"
              onClick={() => navigate(`country/${name.common}`)}>
              <img
                src={flags.svg}
                alt={flags.alt}
                loading="lazy"
                className="country__flag"
              />
              <div className="country__details">
                <h3>{name.official}</h3>
                <p>
                  <span>population: </span>
                  {population}
                </p>
                <p>
                  <span>region: </span>
                  {region}
                </p>
                <p>
                  <span>capital: </span>
                  {capital}
                </p>
              </div>
            </article>
          );
        })}
      </main>
    </section>
  );
}

export default Homepage;
