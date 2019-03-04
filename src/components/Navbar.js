import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component{
  render() {
    return (
      <nav className="navbar">
          <ul>
            {/*<li><NavLink to="/about">About</NavLink></li>
            <li className="navbar-homelink"><NavLink to="/">Home</NavLink></li>*/}
            <li><NavLink to="/events">What's on</NavLink></li>
            <li><NavLink to="/contact">Contact us</NavLink></li>
          </ul>
      </nav>
    )
  }
}

export default Navbar