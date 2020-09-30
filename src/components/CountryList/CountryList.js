import React from 'react';
import Country from '../Country/Country';
import './countrylist.css';
const CountryList = ({stats}) =>{
    return(
        <div className='countrylist'>
            {
             stats.map(country =><CountryList key={country.CountryCode} stats={country}/>)
            }
        </div>
    )
}
export default CountryList;