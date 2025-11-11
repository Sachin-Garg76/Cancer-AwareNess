import React from 'react'

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className="logoName">LifeLight</div>
      <div className='Nav_heading fs-4'>Cancer Helpline <br />  <span className='fs-5'>1800-1248-4344</span></div>
      <div>
        <input type="button" value="Join Us" className='Nav_button joinusbutton'/>
        <input type="button" value="Donate Today" className='Nav_button donatebutton'/>
        <input type="button" value="Sign Up" className='Nav_button'/>
      </div>
    </div>
  )
}

export default Navbar
