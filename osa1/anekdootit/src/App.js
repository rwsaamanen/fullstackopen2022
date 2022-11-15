import { useState } from 'react'


const Header = ({header}) => <h1>{header}</h1>

const AnecdoteWithMostVotes = ({anecdotes, text1, text2, voteAmount}) => {
  const numberOfVotes = Math.max(...voteAmount)
  const mostVotedAnecdote = voteAmount.indexOf(numberOfVotes)

  if (numberOfVotes === 0) {
    return (
      <div></div>
    )
  }

  return (
    <div>
      <p>{anecdotes[mostVotedAnecdote]}</p> 
      <p>{text1} {numberOfVotes} {text2}</p>
    </div>
  )
}
 
const Anecdote = ({anecdote, text1, text2, voteAmount}) => (
  <div>
    <p>{anecdote}</p>
    <p>{text1} {voteAmount} {text2}</p>
  </div>
)

const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const header = 'Anecdote of the day'
  const mostVoted = 'Anecdote with most votes'
  const text1 = 'Has'
  const text2 = 'votes'
  const [selected, setSelected] = useState(0)
  const [count, vote] = useState(Array(anecdotes.length).fill(0))

  const Vote = () => {
    const voteCount = [...count]
    voteCount[selected] += 1
    vote(voteCount)
  }

  const Random = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  return (
    <div>
      <Header header = {header} />
      <Anecdote anecdote = {anecdotes[selected]} voteAmount={count[selected]} text1 = {text1} text2 = {text2} />
      <Button handleClick={Vote} text='vote' />
      <Button handleClick={Random} text='next anecdote' />
      <Header header = {mostVoted} />
      <AnecdoteWithMostVotes anecdotes={anecdotes} voteAmount={count} text1= {text1} text2 = {text2} />
    </div>
  )
}

export default App