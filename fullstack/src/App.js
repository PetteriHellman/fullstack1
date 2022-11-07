import { useEffect, useState } from 'react'
import MakePhonebook from './components/makingForm'
import ShowList from './components/showingsomelist'
import dataService from './services/persons'
import GetAll from './services/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "000 000 000",
      id: 1 
    }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length +1,
    }

    dataService
    .create(personObj)
    .then(returnedData => {
      setPersons(persons.concat(returnedData))
      setNewName('')
      setNewNumber('')
    })
  }

  const handleNewName = (event) => {
    
    setNewName(event.target.value)
  }

  const hanldeNewNumber = (event) => {
    
    setNewNumber(event.target.value)
  }

  useEffect(() => {
    dataService
      .GetAll()
        .then(initialData => {
        setPersons(initialData)
      })
  }, [])

  const deletePerson = id => {
    const dude = persons.find(n => n.id === id)
    if (window.confirm(`Would you like to yeet ${dude.name}`) === true){
      dataService
      .deleteObject(dude.id)
      .then(() => {
        setPersons(persons.filter((dude)=> dude.id !== id))
      })
    }
  }

  return (
    
    <div>
      <MakePhonebook addPerson={addPerson} newName={newName} 
      handleNewName={handleNewName} newNumber={newNumber} 
      hanldeNewNumber={hanldeNewNumber}/>
        <ul>
            <ShowList persons={persons} id={persons.id} name={persons.number} deletePerson={deletePerson}/>
        </ul>
    </div>
  )
}

export default App