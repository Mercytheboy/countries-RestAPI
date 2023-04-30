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
      const response =
        await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true

`);
      const countryData = await response.json();
      setCountry(countryData);
    }
    fetchCountryData();
  }, []);

  return (
    <section className="country__details-container">
      <button className="bact-btn" onClick={() => navigate(-1)}>
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
          <article key={ccn3} className="country__details">
            <img src={flags.svg} alt={flags.alt} className="country__flag" />

            <div className="country__details-info">
              <h2>{name.common}</h2>
              <div>
                <p>
                  <span>Native Name: </span>
                  {Object.values(name.nativeName).map(
                    nativeName => nativeName.common
                  )}
                </p>
                <p>
                  <span>Population: </span>
                  {population}
                </p>
                <p>
                  <span>Region: </span> {region}
                </p>
                <p>
                  <span>Sub Region: </span> {subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top level Domain: </span> {tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.values(currencies).map(currency => currency.name)}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.values(languages).map(language => language)}
                </p>
              </div>

              {borders && (
                <div className="borders">
                  <p>
                    <span>Border Countries: </span>
                    {borders?.map(border => {
                      return (
                        <span className="border__countries" key={border}>
                          {border}
                        </span>
                      );
                    })}
                  </p>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default CountryDetails;
