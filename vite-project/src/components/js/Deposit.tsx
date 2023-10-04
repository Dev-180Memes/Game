import React, { useEffect, useState } from 'react'
import { db, auth } from "../Config/Firebase"
import { getDocs, collection, addDoc, doc, docs } from "firebase/firestore"
import Navbar from './Navbar'
import "../css/deposit.css"

export const Deposit = () => {
    const [depositUser, setDepositUser] = useState([])
    const [senderName, setSenderName] = useState("")

    const depositCollectionRef = collection(db, "Deposit")


    useEffect (() => {
        const getMovieList = async () => {
    
          try {
            const data = await getDocs(depositCollectionRef);
            const filteredData = data.docs.map((doc) => ({
            ...doc.data(), 
            id: doc.id,
          }))
          setDepositUser(filteredData)
        } catch (err) {
          console.error(err)
        }
        }  
    
        getMovieList();
        
    }, [])
    
    
    
    const onSubmitMovies = async () => {
    try {
        await addDoc(depositCollectionRef, {
        accountName: senderName,
        uid: auth?.currentUser?.uid, 
        })
        // getMovieList();
    } catch(err) {
        console.error(err)
    }
    }

  return (
    <div>
        <div className="general-div">
            <Navbar />
        </div>

        <div className="small">
            <small>The minimum deposit is ₦2000</small>  <br />
            <small>Please make sure to enter the full name of the sender</small> 
        </div>

        <div className="submision">
            <button onClick={onSubmitMovies}>Proceed</button>
        </div>

        <div className="inputs">
            
            <form className='inputForm' action="">
                <div className="accountNumber">
                    <p>Account Number:</p>
                    <input type="number" value="" />
                </div>

                <div className="accountNumber">
                    <p>Bank Name:</p>
                    <input type="text" value="" />
                </div>

                <div className="accountNumber">
                    <p>Account Name:</p>
                    <input type="text" value="" />
                </div>

                <h2>BY CRYPTOCURRENCY</h2>

                <div className="accountNumber">
                    <p>TETHER(USDT)</p>
                    <input className='input-usdt' type="text" value="0x68c96acb5b9aa9c154e90c1948b64a051cd06e9a" />
                </div>

                <div className="accountNumber">
                    <p>NETWORK(OPTIONAL)</p>
                    <input type="text" value="BEP 20" />
                </div>

                <div className="accountNumberUser">
                    <p>Enter Sender's Acct Name/Your PLUTO username</p>
                    <input 
                    type="text" 
                    placeholder='Acct name/username' 
                    required
                    onChange={(e) => setSenderName(e.target.value)} 
                    />
                </div>

                
            </form>
            
        </div>

    </div>
  )
}
