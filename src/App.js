import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './scss/App.scss'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <header className="header flex flex--between">
            <Logo/>
            <Navbar/>
          </header>
          <Routes/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
