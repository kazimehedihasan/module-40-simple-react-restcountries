import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  },[]);

  const handleVisitedCountry = country =>{
    // console.log('add this to your visited country');
// console.log(country);
const newVisitedCountry = [...visitedCountries, country];
setVisitedCountries(newVisitedCountry)
  }
  const handleVisitedFlag = flag =>{
   const newVisitedFlags = [...visitedFlags, flag];
   setVisitedFlags(newVisitedFlags)
  }
  return (
    <>
      <h3>countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h4>visited countries {visitedCountries.length}</h4>
        <ul>
{
    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
}
        </ul>
      </div>

<div className="flag-container img flex gap-1 w-32">
{
  visitedFlags.map((flag, idx )=> <img key={idx} src={flag}></img>)
}
</div>

      {/* display countries */}
      <div className="countries">
        {
        countries.map((country) => (
          <Country key={country.cca3}

           handleVisitedCountry={handleVisitedCountry}
           handleVisitedFlag ={handleVisitedFlag}

            country={country}></Country>
        ))
        }
      </div>
    </>
  );
};

export default Countries;
