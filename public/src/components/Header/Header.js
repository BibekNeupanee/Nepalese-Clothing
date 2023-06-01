import React from 'react'
import '../Header/Header.scss'

function Header() {
  return (
    <header>
      <div className="logo"><a href="#">Nepalese Clothing</a></div>
      <ul className="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About US</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </header>
  )
}

export default Header