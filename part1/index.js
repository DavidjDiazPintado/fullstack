import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return<h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return<h1>{props.part1}{props.part2}{props.part3}</h1>
}

const Total = (props) => {
  console.log(props)
  return <h1>Number of exercise {props.suma}</h1>
  
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

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercise1={parts[0].exercises}/>
      <Content part2={parts[1].name} exercise2={parts[1].exercises}/>
      <Content part3={parts[2].name} exercise3={parts[2].exercises}/>
      <Total suma={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))