import React, { useEffect } from "react";
import Country from "../../components/country/Country";
import Search from "../../components/search/Search";

import "./homepage.css";

function Homepage({
  countriesData,
  filteredCountriesData,
  setFilteredCountriesData,
}) {
  useEffect(() => {
    return () => {
      setFilteredCountriesData(countriesData);
    };
  }, [countriesData]);

  return (
    <section className="homepage__container">
      <Search
        countriesData={countriesData}
        setFilteredCountriesData={setFilteredCountriesData}
      />
      <main className="country-grid">
        {filteredCountriesData.map(country => {
          const { ccn3, name, population, region, capital, flags } = country;
          return (
            <Country
              key={ccn3}
              name={name}
              population={population}
              region={region}
              capital={capital}
              flags={flags}
            />
          );
        })}
      </main>
    </section>
  );
}

export default Homepage;
