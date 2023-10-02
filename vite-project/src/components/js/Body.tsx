import React, { useEffect, useState } from 'react'
import "../css/body.css"
import { FirebaseApp } from 'firebase/app'
import  { Firestore, collection, doc, getDocs }  from 'firebase/firestore'
import { db } from '../Config/Firebase'


const Body = () => {
  // for the balnace setting ///////////////////////

  useEffect (() => {
    const getMovieList = async () => {

      try {
        const data = await getDocs(depositCollectionRef);
        const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }))
      
    } catch (err) {
      console.error(err)
    }
    }  

    getMovieList();
    
}, [])

  // const [balance, setBalance] = useState(null)
  // const depositCollectionRef = collection(db, "users")
  // console.log(depositCollectionRef);
  

  
  // useEffect(() => {

  //   const userId = "lbwOuoyKZ7bh86PL5nowEt4VPd12"
  //   const balanceRef = depositCollectionRef.doc(userId);

  //   console.log(balanceRef);
    
  //   const unsubscribe = balanceRef.onSnapshot((doc) => {
  //     if (doc.exists) {
  //       setBalance(doc.data().balance);
  //     }
  //   });

  //   return () => {
  //     // Unsubscribe when the component unmounts
  //     unsubscribe();
  //   };

  // }, [])

  //////////////////////////////////////////////////

  // for the resulting numbers /////////////////////////

  const first = Math.floor((Math.random() + 1) * 10)
  const second = Math.floor(Math.random() * 21)
  const third = Math.floor(Math.random() * 21)

  const [firstNumber, setFirstNumber] = useState()
   
  const setFirst = () => {
    const first = Math.floor((Math.random() + 1) * 10)
    setFirstNumber(first)
  }

  const general = () => {
    setFirst();
    check();
  }

  const mathBal = () => {
    p
  }

  //////////////////////////////////////////////////////

  // for the possible outcomes /////////////////////////

  const a = Math.floor((Math.random() * 21))
  const b = Math.floor((Math.random() * 21))
  const c = Math.floor((Math.random() * 21))
  const d = Math.floor((Math.random() * 21))
  const e = Math.floor((Math.random() * 21))
  const f = Math.floor((Math.random() * 21))
  const g = Math.floor((Math.random() * 21))
  const h = Math.floor((Math.random() * 21))
  const i = Math.floor((Math.random() * 21))
  const j = Math.floor((Math.random() * 21))
  const k = Math.floor((Math.random() * 21))
  const l = Math.floor((Math.random() * 21))

  //////////////////////////////////////////////////////

  // the function to check if the numbers aligns////////

  // const check = () => {
  //   if ( a === first && b === second ) {
  //     alert("you're done")
  //   } else {
  //     alert("Oops! Try again")
  //   }
  // }

  //////////////////////////////////////////////////////

  return (
    <div>

      <div className="whole">

        <div className="main">

            <div className="intro">
              <h1>YOU PLAY</h1> <br />
              <h1 className='we-pay'>WE PAY!</h1>
            </div>

        </div>

        <div className="numbers">

          <div className="num1">
            <h1>{firstNumber}</h1>
          </div>
          <div className="num2">
            <h1>{second}</h1>
          </div>
          <div className="num3">
            <h1>{third}</h1>
          </div>

        </div>

        <div className="numbers">

          <div className="choose">

            <div className="possible">
              <div className="note">
                <h2>POSSIBLE <br /> OUTCOME</h2>
              </div>
              <div className="outcome">
                <p className='use1'>{a}</p>
                <p className='use2'>{b}</p>
                <p className='use3'>{c}</p>
                <p className='use4'>{d}</p>
                <p className='use5'>{e}</p>
                <p className='use6'>{f}</p>
                <p className='use7'>{g}</p>
                <p className='use8'>{h}</p>
                <p className='use9'>{i}</p>
                <p className='use10'>{j}</p>
                <p className='use11'>{k}</p>
                <p className='use12'>{l}</p>
              </div>
            </div>

          </div>

          <div className="possibles">
            <div className="notes">
              <h2>SELECT YOUR<br />OUTCOMES</h2>
            </div>
            <div className="outcomes">
              <p className='use13'>1</p>
              <p className='use14'>2</p>
              <p className='use15'>3</p>
              <p className='use16'>4</p>
              <p className='use17'>5</p>
              <p className='use18'>6</p>
              <p className='use19'>7</p>
              <p className='use20'>8</p>
              <p className='use21'>9</p>
              <p className='use22'>10</p>
              <p className='use23'>11</p>
              <p className='use24'>12</p>
              <p className='use25'>13</p>
              <p className='use26'>14</p>
              <p className='use27'>15</p>
              <p className='use28'>16</p>
              <p className='use29'>17</p>
              <p className='use30'>18</p>
              <p className='use31'>19</p>
              <p className='use32'>20</p>
            </div>
          </div>
        </div>

      </div>

      <div className="user-amount">

        <div className="bet-amount">
          <form>

            <div className="the-amount">

              <div className="how-much">
                <label htmlFor="amount-to-stake">HOW MUCH:</label>

                <input 
                type="number" 
                required min="200" 
                id='amount-to-stake'
                placeholder='Enter amount' 
                />
              </div>

              <div className="multiplier">

                <label htmlFor="multiplier">MULTIPLIER:</label>

                <input 
                type="number" 
                id="multiplier" 
                min="2"
                placeholder='Enter your multiplier' 
                />

              </div>

            </div>

            <button onClick={general} className='the-play'>PLAY!</button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Body
