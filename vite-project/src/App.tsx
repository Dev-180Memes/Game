import React from 'react'
import Apps from "./Apps"
import SignIn from './components/js/SignIn'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    // <Apps />
    <Routes>
        <Route path="/" element={<Apps />} />
        <Route path='signin' element={<SignIn />} />
    </Routes>
  )
}

export default App
