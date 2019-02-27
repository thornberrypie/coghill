import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar