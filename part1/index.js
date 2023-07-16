import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <>
     <p>{props.course}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <p>Part {props.part1} {props.exercise1}
        {props.part2} {props.exercise2}
        {props.part3} {props.exercise3}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercise {props.suma}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercises1}/>
      <Content part2={part2} exercise2={exercises2}/>
      <Content part3={part3} exercise3={exercises3}/>
      <Total suma={exercises1 + exercises2 + exercises3} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))