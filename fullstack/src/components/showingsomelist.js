const ShowList = (props) => {
    return(
      <>
      {props.persons.map(person =>
        <li key={person.id}>{person.name} {person.number}
        <button onClick={(() => props.deletePerson(person.id))}>Delete</button>
            </li> 
          )}
      </>
    )
  }

export default ShowList