import React from "react";
import "./country.css";

function Country({ key, name, population, region, capital, flags }) {
  return (
    <article key={key} className="country">
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
}

export default Country;
