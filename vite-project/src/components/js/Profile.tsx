import React from 'react'
import Navbar from './Navbar'
import "../css/profile.css"
import { auth, googleProvider } from "../Config/Firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { Link } from 'react-router-dom'


export const Profile = () => {

  return (
    <div className="oopp">
        <div className="general-usage">
            <Navbar />
        </div>
        <div className='profile-section'>
            <span className='span'>Username:</span>
            <h3 className='user-name'>{(auth?.currentUser?.email)}; </h3>
        </div>
        <div className="button-profile">
            <button>LOGOUT</button>
            <button><Link to="../signin">LOG IN</Link></button>
        </div>
    </div>
  )
}
