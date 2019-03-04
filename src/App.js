import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './scss/App.scss'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper flex flex--column">
          <header className="header">
            <div className="container flex">
              <Logo/>
              <Navbar/>
            </div>
          </header>
          <Routes/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
