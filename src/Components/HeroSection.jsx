import React from 'react'
import {Link} from 'react-router-dom';
const HeroSection = () => {
  return (
    <>
      <img src="public\img.jpg" alt="Heroimg" className='Heroimg' />
      <div className="overlay heroText">
        <h2 className='heroheadtext'>Together <br /> We can Beat Cancer</h2>
        <p className='Heroparatext'>Join us in spreading awareness and supporting those in need</p>
            <Link className='donatebutton'>Donate Today<Link/>
            <Link className='joinusbutton'>Join Us<Link/>
      </div>
      
    </>
  )
}

export default HeroSection

