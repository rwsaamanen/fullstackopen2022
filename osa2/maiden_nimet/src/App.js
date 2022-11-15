import { useState, useEffect } from "react";
import Filter from './components/Filter'
import Content from './components/Content'
import axios from 'axios'

const App = () => {
  const [newCountry, setNewCountry] = useState([])
  const [newFilter, setNewFilter] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setNewCountry(response.data)
    })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  } 

  return (
    <div>
      <Filter filter = {newFilter} onChange = {handleFilterChange}/>
      <Content allCountries = {newCountry} filter = {newFilter}/>
    </div>
  )
}

export default App;
