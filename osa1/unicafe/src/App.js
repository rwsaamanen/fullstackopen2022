import { useState } from 'react'


const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>{props.text}<td>{props.value}</td>{props.text1}</tr>
  )
}

const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) === 0) {
  return (
    <div>No Feedback Given</div>
  )
}
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good:" value = {props.good} />
            <StatisticLine text="Neutral:" value = {props.neutral} />
            <StatisticLine text="Bad:" value = {props.bad} />
            <StatisticLine text="All:" value = {props.good + props.neutral + props.bad} />
            <StatisticLine text="Average:" value = {(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
            <StatisticLine text="Positive:" value = {(props.good/(props.good + props.neutral + props.bad)*100)} text1='%'/>
          </tbody>
        </table>
      </div>
    )
  }

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
)
 
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const header = 'Give Feedback'
  const statistics = 'Statistics'


  return (
    <div>
      <Header header = {header}/>
      <Button handleClick = {() => setGood(good + 1)} text="Good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text="Bad" />
      <Header header = {statistics} />
      <Statistics good={good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App