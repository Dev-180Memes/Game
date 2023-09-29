import { useState } from 'react'
import './App.css'
import Navbar from "./components/js/Navbar"
import Testimonies from './components/js/Testimonies'
import Body from './components/js/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Testimonies />
      <Body />
    </div>
  )
}

export default App
