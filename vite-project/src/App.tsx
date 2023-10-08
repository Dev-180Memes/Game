import React from 'react'
// import Apps from "./Apps"
import SignIn from './components/js/SignIn'
import { Routes, Route } from 'react-router-dom'
import { Profile } from './components/js/Profile'
import { Withdraw } from './components/js/Withdraw'
import { Deposit } from './components/js/Deposit'
import  Body  from '../src/components/js/Body'

const App = () => {
  return (
    // <Apps />
    <Routes>
        <Route path="/" element={<Body />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='profile' element={<Profile />} />
        <Route path='withdraw' element={<Withdraw />} />
        <Route path='deposit' element={<Deposit />} />
    </Routes>
  )
}

export default App
