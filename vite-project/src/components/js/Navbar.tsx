import React from 'react'
import "../css/navbar.css"
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='navbar'>

      <div className="navbar-container">

        <Link to="/">
          <div className="navbar-logo">
            <img className='logo-img' src={logo} alt="" />
            <h1>PLUTO</h1>
          </div>
        </Link>

        <div className="profile">
          <p><Link to="../profile">PROFILE</Link></p>
        </div>

        <div className="withdraw">
          <p><Link to="../withdraw">WITHDRAW</Link></p>
        </div>  

        <div className="navbar-balance">
          <h1><Link to="../deposit">₦ 30000</Link></h1>
        </div>

      </div>

      <a href="https://google.com">How to play, Click Me!</a>

    </div>
  )
}

export default Navbar
