import { useState } from 'react'

const Good = (props) => {
  return (
      <div><p> Good {props.good} </p></div>
  )
}
const Neutral = (props) => {
  return (
      <div><p> Neutral {props.neutral} </p></div>
  )
}
const Bad = (props) => {
  return (
      <div><p> Bad {props.bad} </p></div>
  )
}

const Average = (props) => {
  return (
      <div><p>Average {props.bad}+{props.good}+{props.neutral}</p></div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }
  


  return (
    <div>
      <Good good={good} />
      <Neutral neutral={neutral}/>
      <Bad bad={bad}/>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
    </div>
  )
}

export default App