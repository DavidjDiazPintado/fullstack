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
  const course = { 
    name:'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercise1={course.parts[0].exercises}/>
      <Content part2={course.parts[1].name} exercise2={course.parts[1].exercises}/>
      <Content part3={course.parts[2].name} exercise3={course.parts[2].exercises}/>
      <Total suma={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))