import React from 'react'
import "../css/testimonies.css"

const Testimonies = () => {
  
  const x = Math.floor(Math.random() * 9999);
  const y = Math.floor(Math.random() * 40000);
  
  // the timeout to make the page reload

  // setTimeout(() => {
  //   window.location.reload()
  // }, 50000);

  // /////////////////////////////////


  return (
    <div className='main-body'>
      <p>0xxxxxx{x} just won {y}</p>
    </div>
  )
}

export default Testimonies
