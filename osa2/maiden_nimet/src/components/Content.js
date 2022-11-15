import React from 'react'
import Country from './Country'
import Data from './Data'

const Content = ({allCountries, filter}) => {
  console.log({allCountries, filter})
  let sortedInput = []
  sortedInput = allCountries.filter(allCountries => 
    allCountries.name.toString().toUpperCase().includes(filter.toString().toUpperCase()))

  if (sortedInput.length >= 10) 
  {
    return (
      <div>
        <h4>Too many matches, specify another filter</h4>
      </div>
    )
  } 
  else if (sortedInput.length === 1) 
  {
    return (
      <div>
      <Country allCountries={sortedInput[0]}/>
      </div>
    )
  } 
  else 
  {
    return (
      <div>
          {sortedInput.map(allCountries =>
            <Data key={allCountries.name} allCountries={allCountries}/>
          )}
      </div>
    )
  }
}

export default Content