import React from 'react'
import logo from '../img/coghill-logo.svg'
import { Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
  )
}

export default Logo