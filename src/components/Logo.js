import React from 'react'
import logo from '../img/coghill-logo-black-200.png'
import logoHover from '../img/coghill-logo.png'
import { Link} from 'react-router-dom'

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-hover" src={logoHover} alt="Coghill colour logo"/>
        <img className="logo-image" src={logo} alt="logo"/>
      </Link>
    </div>
  )
}

export default Logo