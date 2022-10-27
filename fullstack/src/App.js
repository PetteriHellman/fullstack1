import { useState } from 'react'



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = () => {
    setGood(1)
  }

  return (
    <div>
      <button onClick={handleClick}>Good</button>
    </div>
  )
}

export default App