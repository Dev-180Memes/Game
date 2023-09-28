import { useState } from 'react'
import './App.css'
import Navbar from "./components/js/Navbar"
import Testimonies from './components/js/Testimonies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Testimonies />
    </div>
  )
}

export default App
