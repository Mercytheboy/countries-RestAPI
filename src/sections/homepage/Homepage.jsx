import React from "react";
import Country from "../../components/country/Country";

import "./homepage.css";

function Homepage({ countriesData }) {
  return (
    <main className="homepage">
      {countriesData.map(countryData => {
        const { cca3, name, population, region, capital, flags } = countryData;
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
