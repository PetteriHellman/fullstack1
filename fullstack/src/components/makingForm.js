

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

  export default MakePhonebook 