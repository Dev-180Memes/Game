import React from 'react'
import "../css/body.css"

const Body = () => {

   const first = Math.floor((Math.random() + 1) * 10)
   const second = Math.floor(Math.random() * 21)
   const third = Math.floor(Math.random() * 21)

   if (first === 11) {
      alert("you just won the jackpot")
   }

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
              <h1>{first}</h1>
            </div>
            <div className="num2">
              <h1>{second}</h1>
            </div>
            <div className="num3">
              <h1>{third}</h1>
            </div>

        </div>

      </div>

    </div>
  )
}

export default Body
