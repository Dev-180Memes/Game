// import React from "react";
import { auth, googleProvider } from "../Config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

import { useState } from "react";
import { Link } from "react-router-dom"
// import Body from "./Body";
import "../css/signIn.css"
import LogIn from "./LogIn";
import Head from "../js/Navbar";

function SignIn () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    ////////////////////////////////////// to set the redirecting of the pages
    // const [redirect, setRedirect] = useState(false)

    // const handleRedirect = () => {
    //   setRedirect(true)
    // }

    console.log(auth?.currentUser?.email);
    

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider );
        } catch (err) {
            console.error(err)
        }
    }

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    };

    const logOut = async () => {
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };

  //////////////////////////////////////////// to make the password readable on click and vice versa
  // var openPassword = document.getElementsByClassName("password")

  // const myFunction = () => {
  //   if (openPassword.type === "password") {
  //     openPassword.type = "text";
  //   } else {
  //     openPassword.type = "password"
  //   }
  // }

  //////////////////////////////////////////////////////////////////////

  return(
    <div className="signIn">
      
      <div className="signIn-div">
      <Head />
        <div className="signText">
          <h2>Sign Up Now</h2> 
        </div>
        <div className="signInput">
          <label htmlFor="">Phone:</label>
          <div className="email">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="password" placeholder="(+234) 9069696969" required/>
          </div>
          <label htmlFor="">Password:</label>
          <div className="password-3">
            <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            className="password-2" 
            placeholder="Password..." 
            required
            />
            {/* <input type="checkbox" /> View Password */}
          </div>
        </div>
        <div className="confirmation">
          <input type="checkbox" />I agree to the terms and condition
        </div>
        <div className="account">
          <div className="input-div">
            <form action="" className="formInput">
              <input type="submit" onClick={signIn} className="submission" value="Sign Up"/>
            </form>
          </div>
          <div className="or">
            <h3>OR</h3>
          </div>
          <div className="input-div2">
            <input type="submit" onClick={signInWithGoogle} className="submission2" value="Sign up with Google"/>
          </div>
        </div>
        <div className="user">
          <p>Already have an account?</p>
          <p className="loginInA" ><Link to="body">Log In</Link></p>
        </div>
      </div>
    </div>
  )
};

export default SignIn;
