import React from 'react'
import "../css/navbar.css"
import logo from "../../assets/logo.jpg"


const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="navbar-container">

        <div className="navbar-logo">
          <img className='logo-img' src={logo} alt="" />
          <h1>PLUTO</h1>
        </div>

        <div className="profile">
          <p>PROFILE</p>
        </div>

        <div className="withdraw">
          <p>WITHDRAW</p>
        </div>  

        <div className="navbar-balance">
          <h1>₦ 15000</h1>
        </div>

      </div>

    </div>
  )
}

export default Navbar
