import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

function Search({ countriesData, setFilteredCountriesData }) {
  const [searchNation, setSearchNation] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  function handleSearchNationChange(e) {
    const newSearcNation = e.target.value;
    setSearchNation(newSearcNation);
    filterData(newSearcNation, filterByRegion);
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
    <section className="search__container">
      <form className="form__control">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for a country..."
          value={searchNation}
          onChange={handleSearchNationChange}
        />
        <button>
          <FaSearch />
        </button>
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
  );
}

export default Search;
