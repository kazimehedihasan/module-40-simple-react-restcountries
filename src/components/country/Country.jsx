import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
   const {name, flags, population, area, ccn3} = country;


   const [visited, setVisited]  = useState(false)
   const handleVisited = () => {
    setVisited(true);
   }
    return (
        <div className='country'>
             <img src={flags.png} alt=""/>
            <h3>country name:  {name?.common}</h3>
            <p>{population}</p>
            <p>{area}</p>
            <p><small>code:  {ccn3}</small></p>
           <button onClick={handleVisited} className='btn bg-red-300'>{visited ? 'visit':'visited' }</button>
           {/* {visited && 'I have visited this country'} */}
           {visited ? 'I have visited this country' : 'not visited'}
        </div>
    );
};

export default Country;