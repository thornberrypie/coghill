import React, { Component } from 'react';
import './scss/App.scss'
import logo from './img/coghill-logo.svg';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <img src={logo} className="header-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
