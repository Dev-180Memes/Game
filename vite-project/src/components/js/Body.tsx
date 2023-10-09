import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/body.css"
import Navbar from './Navbar'
import  { collection, addDoc, doc, getDocs,where, query }  from 'firebase/firestore'
import { db, auth } from '../Config/Firebase'
import Testimonies from './Testimonies'

const Body = () => {

  // for the staking and multiplier settings ////////

  const [staking, setStaking] = useState(0)
  const [multiplier, setMultiplier] = useState(0)

  // for the staking and multiplier settings ////////

  // for the resulting numbers /////////////////////////

  
  const [firstNumber, setFirstNumber] = useState()
  const [secondNumber, setSecondNumber] = useState()
  const [thirdNumber, setThirdNumber] = useState()

  // for the guessed numbers ///

  const [one, setOne] = useState(1)
  const [two, setTwo] = useState(2)
  const [three, setThree] = useState(3)
  const [four, setFour] = useState(4)
  const [five, setFive] = useState(5)
  const [six, setSix] = useState(6)
  const [seven, setSeven] = useState(7)
  const [eight, setEight] = useState(8)
  const [nine, setNine] = useState(9)
  const [ten, setTen] = useState(10)
  const [eleven, setEleven] = useState(11)
  const [twelve, setTwelve] = useState(12)
  const [thirteen, setThriteen] = useState(13)
  const [fourteen, setFourteen] = useState(14)
  const [fiveteen, setFiveteen] = useState(15)
  const [sixteen, setSixteen] = useState(16)
  const [seventeen, setSeventeen] = useState(17)
  const [eighteen, setEigtheen] = useState(18)
  const [nineteen, setNineteen] = useState(19)
  const [twenty, setTwenty] = useState(20)

  // for the guessed numbers ///
  
  const setFirst = () => {
    const first = Math.floor((Math.random() + 1) * 10)
    setFirstNumber(first)
  }
  
  const setSecond = () => {
    const second = Math.floor(Math.random() * 21)
    setSecondNumber(second)
  }
  
  const setThird = () => {   
    const third = Math.floor(Math.random() * 21)
    setThirdNumber(third)
  }

  const general = () => {
    setFirst();
    setSecond();
    setThird();
    onSubmitMovies();
    const result = staking * multiplier; 
    

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

  // for the balance functions ///////////////

  const [users, setUsers] = useState([])
  const [balancers, setBalancers] = useState(0)
  const [otherBalance, setOtherBalance] = useState(balancers)
  const [display, setDisplay] = useState(balancers)
  const depositCollectionRef = collection(db, "users")


  const useThis = () => {
    setBalancers(props.stake)
  }

  // const calculation = () => {
  //   setDisplay(balancers * mainBalance )
  // }

  // for the balance functions ///////////////


  
  // from Chat /////////////////////////////

  const user = auth.currentUser

  useEffect(() => {
    const getUsersData = async () => {
      try {
        if (user) {
          // Create a query to fetch data only for the current user based on their UID
          const q = query(depositCollectionRef, where('uid', '==', user.uid));
          const data = await getDocs(q);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setUsers(filteredData);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUsersData();
  }, [users, depositCollectionRef]); 

  const onSubmitMovies = async () => {
    try {
      await addDoc(depositCollectionRef, {
        stake: staking,
        multiplier: multiplier, 
        userId: auth?.currentUser?.uid, 
      })
      // getMovieList();
    } catch(err) {
      console.error(err)
    }
  }

  // for the balance functions ///////////////

  return (
    <div>
      <Navbar />
      <Testimonies />
      <div className="navbar-balance">
          <h1><Link to="../deposit">{users.map ((users) => (
          <div>
            <p key={users.id} style={{color:"red", fontSize:"25px", letterSpacing:".5px"}}> Balance: ₦ {users.balance-staking * users.stake}</p>
            <p>{users.stake - users.multiplier}</p>
          </div>
        ))}</Link></h1>
        </div>
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
              <h1>{secondNumber}</h1>
            </div>
            <div className="num3">
              <h1>{thirdNumber}</h1>
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
              <p className='use13'>{one}</p>
              <p className='use14'>{two}</p>
              <p className='use15'>{three}</p>
              <p className='use16'>{four}</p>
              <p className='use17'>{five}</p>
              <p className='use18'>{six}</p>
              <p className='use19'>{seven}</p>
              <p className='use20'>{eight}</p>
              <p className='use21'>{nine}</p>
              <p className='use22'>{ten}</p>
              <p className='use23'>{eleven}</p>
              <p className='use24'>{twelve}</p>
              <p className='use25'>{thirteen}</p>
              <p className='use26'>{fourteen}</p>
              <p className='use27'>{fiveteen}</p>
              <p className='use28'>{sixteen}</p>
              <p className='use29'>{seventeen}</p>
              <p className='use30'>{eighteen}</p>
              <p className='use31'>{nineteen}</p>
              <p className='use32'>{twenty}</p>
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
                onChange={(e) => setStaking(Number(e.target.value))}
                id='amount-to-stake'
                placeholder='Enter amount' 
                />
              </div>

              <div className="multiplier">

                <label htmlFor="multiplier">MULTIPLIER:</label>

                <input 
                type="number" 
                onChange={(e) => setMultiplier(Number(e.target.value))}
                id="multiplier" 
                min="2"
                placeholder='Enter your multiplier' 
                required
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
