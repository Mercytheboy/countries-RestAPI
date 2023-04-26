import React from "react";
import Country from "../../components/country/Country";

import "./homepage.css";

function Homepage({ filteredCountriesData }) {
  return (
    <main className="homepage">
      {filteredCountriesData.map(country => {
        const { cca3, name, population, region, capital, flags } = country;
        return (
          <Country
            key={cca3}
            name={name}
            population={population}
            region={region}
            capital={capital}
            flags={flags}
          />
        );
      })}
    </main>
  );
}

export default Homepage;
