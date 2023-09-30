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

  // if (first === 11) {
  //   alert("you just won the jackpot")
  // }

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
                <p className='1'>{a}</p>
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

          <div className="possibles">
            <div className="notes">
              <h2>SELECT YOUR<br />OUTCOMES</h2>
            </div>
            <div className="outcomes">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
              <p>12</p>
              <p>13</p>
              <p>14</p>
              <p>15</p>
              <p>16</p>
              <p>17</p>
              <p>18</p>
              <p>19</p>
              <p>20</p>
            </div>
          </div>
        </div>

      </div>

      <div className="user-amount">

        <div className="bet-amount">
          <form action="">

            <div className="the-amount">

              <div className="how-much">
                <label htmlFor="amount-to-stake">HOW MUCH:</label>

                <input type="number" required min="200" id='amount-to-stake' />
              </div>

              <div className="multiplier">

                <label htmlFor="multiplier">MULTIPLIER:</label>

                <input type="number" id="multiplier" min="2" />

              </div>

            </div>

            <button>PLAY!</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Body
