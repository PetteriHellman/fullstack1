 const Header = (props) => {
   console.log(props)
   return (
    
     <><h1>{props.mapped}</h1></>
   )
 }


// const Content = (props) => {
//   console.log(props)
//   return (
//     <>
//         {props.parts.map(part => <p key={part.id}>
//           {part.name} {part.exercises}</p>)}
//         </>
    
//   )
// }

// const Total = (props) => {
//   console.log(props)
//   const exercises = props.parts.map((part) => part.exercises)
//   const sum = exercises.reduce((previous, current)=>previous + current, 0)
//   return (
//     <p>Total exercises {sum}</p>
//   )

// }


  


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const mapped = courses.map(map => map.parts)
  console.log(mapped)
    return (
    <div>
      <Header mapped = {mapped.parts} />
      {/* <Content parts = {courses.parts} />
      <Total parts = {courses.parts} />  */}
    </div>
    )
    
  }

export default App
