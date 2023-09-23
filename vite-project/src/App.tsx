import { useState } from 'react'
import './App.css'
import Navbar from "./components/js/navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
