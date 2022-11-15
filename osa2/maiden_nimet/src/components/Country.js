import React from 'react'
import Weather from './Weather'
import Language from './Language'

const allCountries = ({allCountries}) => (
  <div>
    <h1><i>{allCountries.name}</i></h1>
    <div>
      <strong>Capital:</strong> {allCountries.capital}
    </div>
    <div>
    <strong>Population:</strong> {allCountries.population}
    </div>
    <h3><strong>Languages</strong></h3>
      <div>
        {allCountries.languages.map(language =>
          <Language key={language.name} language={language.name} />
        )}
      </div>
    <img src={allCountries.flag} width="15%" height="15%" />
    <Weather capital={allCountries.capital} />
  </div>
)

export default allCountries