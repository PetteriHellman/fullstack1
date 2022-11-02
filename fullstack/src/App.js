import { useState } from 'react'
// import Numbers from './components/numbers'

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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const hanldeNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // console.log(persons.includes(newName))

  return (
    
    <div>
      debug: {newName}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNewName}
            />
          
        </div>
        <div>
            Number: <input 
            value={newNumber}
            onChange={hanldeNewNumber}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
            {persons.map(person =>
            <li key={person.id}>{person.name} {person.number}</li> 
              )}
        </ul>
    </div>
  )
}

export default App