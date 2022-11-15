import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [ setWeather, setNewWeather ] = useState([])

  const hook = () => {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={api_key}&query=${capital}')
      .then(response => {
        setNewWeather(response.data.current)
      })
    }

  useEffect(hook, [])
  console.log(setWeather)

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div><strong>Temperature:</strong> {setWeather.temperature} Celcius</div>
    </div>
  )
}

export default Weather