import React from "react";
import { useNavigate } from "react-router-dom";
import "./country.css";

function Country({ key, name, population, region, capital, flags }) {
  const navigate = useNavigate();

  return (
    <article
      key={key}
      className="country"
      onClick={() => navigate(`country/${name.official}`)}>
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
