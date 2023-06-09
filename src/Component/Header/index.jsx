import React from 'react'
import './header.css'
import NavBar from '../NavBar';

function Header() {
  return (
    <div>
        <div className='rectangle1'>
            <div className='OSULogo'>The Ohio State University</div>
            <div className='redLine'></div>
            <div className='labTitle'>AIoT And Machine Learning Systems Lab</div>
            <NavBar></NavBar>
        </div>
    </div>
  )
}

export default Header