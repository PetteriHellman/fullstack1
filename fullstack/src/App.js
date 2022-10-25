const Header = (props) => {
  return (
      <h1> {props.course} </h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    
    <><p>{props.work[0]} {props.dangit[0]}</p>
    <p>{props.work[1]} {props.dangit[1]}</p>
    <p>{props.work[2]} {props.dangit[2]}</p></>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.dangit[0] + props.dangit[1] + props.dangit[2]}</p>
    
  )
}

const App = () => {


  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    
  ]
    const Work = parts.map(parts => parts.name)
    console.log(Work)
    const Dangit = parts.map(parts => parts.exercises)
    console.log(Dangit)
  return (
    
    <div>
      <Header course={course} />
      <Content work={Work} dangit={Dangit} />
      <Total dangit={Dangit} />
    </div>
    
  )
}

export default App
