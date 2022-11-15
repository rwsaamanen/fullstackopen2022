import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  // const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
    const noteObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: persons.length + 1,
    }

    axios
      .post('http://localhost:3001/persons', noteObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
      })

    const newPersons = persons.concat(noteObject)
    const newNumbers = newNumber.concat(noteObject)
    setNewName('')
    setNewNumber('')

    console.log(newPersons, newNumbers)

//  const check = (person) => ( person.name.toLowerCase() === newName.toLowerCase() )
    const ifPersonAlready = persons.some((person) => ( person.name.toLowerCase() === newName.toLowerCase())) 
    
      if (ifPersonAlready)
        window.alert(`${newName} already added to phonebook`)

      else
        setPersons(newPersons, newNumbers)
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  // const notesToShow = showAll
  //   ? persons
  //   : persons.filter(persons => persons.important === true)

  const deletePerson = (id) => {
    const person = persons.some((person) => person.id === id)
    const windowConfirmation = window.confirm(`Delete ${person.name} ?`)

    // if (windowConfirmation) {
    //}
  }

  const personsFiltered = persons.filter(persons => persons.name.toUpperCase().includes(newFilter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value = {newFilter} onChangeFilter = {handleFilterChange}/>
      <h2>Add new</h2>
      <PersonForm onSubmit = {addPerson} name = {newName} onChangeName = {handleNoteChange} number = {newNumber} onChangeNumber = {handleNumberChange} />
      <h2>Numbers</h2>
      {personsFiltered.map(personsFiltered => 
      <Persons key = {personsFiltered.id} data = {personsFiltered} filter = {newFilter} delete = {deletePerson}/>
      )}
    </div>
  )
}

export default App