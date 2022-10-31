
const Course = (props) => {
  console.log(props)
  
  return (
    <><p>{props.mapping[1]}</p></>
    
  )
}

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]

    }

    const mapping = course.parts.map(course => course.parts)
    
    return ( <Course mapping={course} />
    )
  }

export default App
