import React, { useState } from 'react'
import Country from './Country'

const Data = ({allCountries}) => {
  console.log({allCountries})

  const [showInfo, setShowInfo] = useState(false)
  
  const handleClickOpen = () => setShowInfo(!(showInfo))

  return (
  <div>
    {allCountries.name} <button onClick={handleClickOpen}>show</button>
    {showInfo && <Country allCountries={allCountries} />}
  </div>
  )
}

export default Data