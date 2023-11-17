import React from 'react'
import './css/header.css'

const Header = () => {
  function click(name)
  {
    console.log(name);
  }
  return (
    <div>
      <p className='para'><b><h1>DIE HEART FAN OF D_BOSS AND MSD_7</h1></b></p>
      <button onClick={()=> click('punith')}>clickme</button>
    </div>
  )
}
export default Header