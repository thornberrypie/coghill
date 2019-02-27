import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Events from '../views/Events'
import Contact from '../views/Contact'

const Routes = () => {
  return (
    <main>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/events" component={Events}/>
      <Route path="/contact" component={Contact}/>
    </main>
  )
}

export default Routes