import React from 'react'
import '../Header/Header.scss'

function Header() {
  return (
    <header>
      <div className="logo"><a href="#">Nepalese Clothing</a></div>
      <div className='nav-bar'>
        <a href="#" className="home">Home</a>
        <a href="#" className="blogz">Blog</a>
        <a href="#" className="about-us">About Us</a>
        <a href="#" className="contact-us">Contact Us</a>
      </div>

      
    </header>
  )
}

export default Header