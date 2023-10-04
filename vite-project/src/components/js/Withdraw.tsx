import React, { useEffect, useState } from 'react'
import {  collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../Config/Firebase"
import Navbar from './Navbar'

export const Withdraw = () => {

    const [movieList, setMovieList] = useState([])
    const usersCollectionRef = collection(db, "Withdraw")



    const [newUserAccountNumber, setNewUserAccountNumber] = useState(0);
    const [newUserAmount, setNewUserAmount] = useState(0);
    const [newUserBankName, setNewUserBankName] = useState("");
    const [newUserAccountName, setNewUserAccountName] = useState("");

    useEffect (() => {
        const getMovieList = async () => {
    
          try {
            const data = await getDocs(usersCollectionRef);
            const filteredData = data.docs.map((doc) => ({
            ...doc.data(), 
            id: doc.id,
          }))
          setMovieList(filteredData)
        } catch (err) {
          console.error(err)
        }
        }  
    
        getMovieList();
        
      }, [])
        
        
        
      //   getMovieList();
    
      // }, []);
    
    
    
      const onSubmitMovies = async () => {
        try {
          await addDoc(usersCollectionRef, {
            accountName: newUserAccountName,
            accountNumber: newUserAccountNumber,
            amount: newUserAmount,
            bankName: newUserBankName,
            
          })
          // getMovieList();
        } catch(err) {
          console.error(err)
        }
      }

  return (
    <div>
        <div className="general-user-div">
            <Navbar />
        </div>
        <div className="small">
          <small>The minimum withdrawal is ₦2000.</small> <br />
          <small>Please press the submit button once</small>
        </div>

        <div>
              
                <div className="submision">
                  <button onClick={onSubmitMovies}>submit</button>
                </div>
              
            </div>

        <div className="inputs">
            <form className='inputForm' action="">
                <div className="accountNumber">
                  <p>Amount:</p>
                  <input placeholder='Amount to Withdraw'
                  onChange={(e) => setNewUserAmount(Number(e.target.value))}  
                  type="number" />
                </div>

                <div className="accountNumber">
                  <p>Account Number:</p>
                  <input 
                  placeholder='Enter Your Acct No' 
                  onChange={(e) => setNewUserAccountNumber(Number(e.target.value))}
                  type="number"
                  />
                </div>

                <div className="accountNumber">
                  <p>Bank Name:</p>
                  <input 
                  type="text" 
                  onChange={(e) => setNewUserBankName(e.target.value)}
                  placeholder='Enter Bank Name' />
                </div>

                <div className="accountNumber">
                  <p>Account Name:</p>
                  <input 
                  type="text"
                  onChange={(e) => setNewUserAccountName(e.target.value)}
                  placeholder='Enter Your Acct Name' />
                </div>
          </form>
            
        </div>

    </div>
  )
}
