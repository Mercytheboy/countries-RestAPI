import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./countrydetails.css";

function CountryDetails() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountryData() {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}
`);
      const countryData = await response.json();
      setCountry(countryData);
    }
    fetchCountryData();
  }, []);

  return (
    <section>
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft /> <span>Back</span>
      </button>

      {country.map(countryDetails => {
        const {
          ccn3,
          name,
          flags,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        } = countryDetails;
        return (
          <article key={ccn3}>
            <img src={flags.svg} alt={flags.alt} />

            <div>
              <h2>{name.official}</h2>
              <p>
                Native Name:{" "}
                {Object.values(name.nativeName).map(
                  nativeName => nativeName.common
                )}
              </p>
              <p>
                Population: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
              <p>
                Top Level Domain: <span>{tld}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>
                  {Object.values(currencies).map(currency => currency.name)}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {Object.values(languages).map(language => language)}
                </span>
              </p>

              <p>
                Border Countries:{" "}
                {borders.map(border => {
                  return <span className="border__countries">{border}</span>;
                })}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default CountryDetails;
