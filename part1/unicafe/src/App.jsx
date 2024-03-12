import { useState } from 'react'

const Statistics = ({text, value}) => {

  return(
    <div>
      <table>
      <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      </tbody>
      </table>
    </div>
  )
}

const Total = ({good, neutral, bad}) => {

  const total = good + neutral + bad;
  if(total === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="total" value={total}/>
      <Statistics text="average" value={((good - bad) / total).toFixed(2)}/>
      <Statistics text="positive" value={((100 * good) / total).toFixed(2)}/> 
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <div>
      <button onClick={onClick}>{text}</button>
      
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () =>{
    setGood(good + 1)
  }

  const handleNeutralButton = () =>{
    setNeutral(neutral + 1)
  }

  const handleBadButton = () =>{
    setBad(bad + 1)
  }

  
 

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={handleGoodButton} text="good"/>
        <Button onClick={handleNeutralButton} text="neutral"/>
        <Button onClick={handleBadButton} text="bad"/>
      </div>
      <h2>Statistics</h2>
      <Total good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
