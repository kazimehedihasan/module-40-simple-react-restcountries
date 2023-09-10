import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  });
  return (
    <>
      <h3>countries: {countries.length}</h3>
      <div className="countries">
        {
        countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))
        }
      </div>
    </>
  );
};

export default Countries;
