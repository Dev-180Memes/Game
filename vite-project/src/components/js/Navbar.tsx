import React, { useEffect, useState } from 'react'
import "../css/navbar.css"
import  { collection, doc, getDocs,where, query }  from 'firebase/firestore'
import { db, auth } from '../Config/Firebase'
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'
import { googleProvider } from "../Config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


const Navbar = (props) => {

  //// trials ////////////////////////////////////////

  const [users, setUsers] = useState([])
  const [balancers, setBalancers] = useState(200)
  const [display, setDisplay] = useState(balancers)
  const depositCollectionRef = collection(db, "users")


  // const useThis = () => {
  //   setBalancers(props.stake)
  // }

  // const calculation = () => {
  //   setDisplay(balancers * mainBalance )
  // }

  
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


  const handleAdd = () => {
    if (users.length === 0) {
      console.error('User data not available');
      return;
    }

    const currentUser = users[0];
    const newBalance = currentUser.balance / 1000; // Example: Add 10 to the balance

    // Update the balance in Firestore
    const userDocRef = db.collection('users').doc(user.uid);
    userDocRef
      .update({ balance: newBalance })
      .then(() => {
        setUsers([{ ...currentUser, balance: newBalance }]);
      })
      .catch((error) => {
        console.error('Error updating balance:', error);
      });
  };
  
  // const handlePlay = async () => {
  // if (users.length === 0) {
  //   console.error('User data not available');
  //   return;
  // }

  // const userBalance = users[0].balance;
  //   

  //   const newBalance = userBalance - amountToSubtract;

  //   try {
  //     // Update the balance in Firestore
  //     const userDocRef = db.collection('users').doc(user.uid);
  //     await userDocRef.update({ balance: newBalance });

  //     // Update the local state with the new balance
  //     setUsers([{ ...users[0], balance: newBalance }]);
  //   } catch (error) {
  //     console.error('Error updating balance:', error);
  //   }
  // };

  // from Chat /////////////////////////////

  
  
  
  

  // useEffect (() => {
  //   const getMovieList = async () => {

  //     try {
  //       const data = await getDocs(depositCollectionRef);
  //       const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(), 
  //       id: doc.userId,
  //     }))
  //     setUsers(filteredData)
  //   } catch (err) {
  //     console.error(err)
  //   }
  //   }  

  //   getMovieList();
      
  // }, [])

  //////////////////////////////////////////////////

  //// trials ////////////////////////////////////////

  return (
    <div className='navbar'>

      <div className="navbar-container">

        

        <Link to="/">
          <div className="navbar-logo">
            <img className='logo-img' src={logo} alt="" />
            <h1>PLUTO</h1>
          </div>
        </Link>

        {/* <button onClick={subtractAmount}>Substract</button>
        <input type="text" onChange={(e) => setAmountToSubtract(e.target.value)} /> */}

        <div className="profile">
          <p><Link to="../profile">PROFILE</Link></p>
        </div>

        <div className="withdraw">
          <p><Link to="../withdraw">WITHDRAW</Link></p>
        </div> 

        <div className="navbar-balance">
          <h1><Link to="../deposit">{users.map ((users) => (
          <div>
            <p key={users.id}>₦ {users.balance-balancers}</p>
          </div>
        ))}</Link></h1>
        </div>

      </div>

      <a href="https://google.com">How to play, Click Me!</a>

    </div>
  )
}

export default Navbar
