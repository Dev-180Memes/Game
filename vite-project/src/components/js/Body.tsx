import React from 'react'
import "../css/body.css"

const Body = () => {

  // for the resulting numbers /////////////////////////

  const first = Math.floor((Math.random() + 1) * 10)
  const second = Math.floor(Math.random() * 21)
  const third = Math.floor(Math.random() * 21)

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

        <div className="numbers">

          <div className="choose">

            <div className="possible">
              <div className="note">
                <h2>POSSIBLE <br /> OUTCOME</h2>
              </div>
              <div className="outcome">
                <p>{a}</p>
                <p>{b}</p>
                <p>{c}</p>
                <p>{d}</p>
                <p>{e}</p>
                <p>{f}</p>
                <p>{g}</p>
                <p>{h}</p>
                <p>{i}</p>
                <p>{j}</p>
                <p>{k}</p>
                <p>{l}</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Body
