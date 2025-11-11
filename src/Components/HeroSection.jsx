import React from 'react'

const HeroSection = () => {
  return (
    <>
      <img src="public\img.jpg" alt="Heroimg" className='Heroimg' />
      <div className="overlay heroText">
        <h2 className='heroheadtext'>Together <br /> We can Beat Cancer</h2>
        <p className='Heroparatext'>Join us in spreading awareness and supporting those in need</p>
        <input type="button" value="Donate Today" className='donatebutton'/>
        <input type="button" value="Join Us" className='joinusbutton'/>
      </div>
      
    </>
  )
}

export default HeroSection
