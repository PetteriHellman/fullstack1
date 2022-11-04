import { useEffect, useState } from 'react'
import axios from 'axios'

const ShowList = (props) => {
  return(
    <>
    {props.persons.map(person =>
      <li key={person.id}>{person.name} {person.number}</li> 
        )}
    </>
  )
}
const MakePhonebook = (props) => {
  return(
    <div>
    <h2>Phonebook</h2>
      <form onSubmit={props.addPerson}>
        <div>
          name: <input 
            value={props.newName}
            onChange={props.handleNewName}
            />
          
        </div>
        <div>
            Number: <input 
            value={props.newNumber}
            onChange={props.hanldeNewNumber}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}
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
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    
    setNewName(event.target.value)
  }

  const hanldeNewNumber = (event) => {
    
    setNewNumber(event.target.value)
  }

  useEffect(()=> {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)

      })
  }, [])

   console.log(persons)

  return (
    
    <div>
      <MakePhonebook addPerson={addPerson} newName={newName} 
      handleNewName={handleNewName} newNumber={newNumber} 
      hanldeNewNumber={hanldeNewNumber}/>
        <ul>
            <ShowList persons={persons} id={persons.id} name={persons.number}/>
        </ul>
    </div>
  )
}

export default App