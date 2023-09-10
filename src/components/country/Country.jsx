import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {
   const {name, flags, population, area, ccn3} = country;


   const [visited, setVisited]  = useState(false)
   const handleVisited = () => {
    setVisited(true);
   }
   console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited' : 'visit'}`}>
             <img src={flags.png} alt=""/>
            <h3>country name:  {name?.common}</h3>
            <p>{population}</p>
            <p>{area}</p>
            <p><small>code:  {ccn3}</small></p>
            <button onClick={() =>handleVisitedCountry(country)} className='btn'>click to visit</button><br/> <br/>
           <button onClick={handleVisited} className='btn bg-red-300'>{visited ? 'visit':'visited' }</button>
           {/* {visited && 'I have visited this country'} */}
           {visited ? 'I have visited this country' : 'not visited'}
        </div>
    );
};

export default Country;