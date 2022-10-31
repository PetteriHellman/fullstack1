
const Course = (props) => {
  return (
    <div>
      <div><p> Good {props.good} </p></div>
      <div><p> Neutral {props.neutral} </p></div>
      <div><p> Bad {props.bad} </p></div>
      <div><p>All {props.bad+props.good+props.neutral}</p></div>
      <div><p>Average {((props.good-props.bad)/(props.bad+props.good+props.neutral))}</p></div>
      <div><p>Average positive {((props.good)/(props.bad+props.good+props.neutral))}%</p></div>
    </div>
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

  return <Course course={course} />
}

export default App