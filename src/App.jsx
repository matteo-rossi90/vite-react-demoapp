import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const happy = <h2>I am happy to use React!</h2>

function getDate(date) {
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>My first React App</h1>
      {happy} 
      <h3> Today is {getDate(new Date)}</h3>
    </>
  )
}

export default App
