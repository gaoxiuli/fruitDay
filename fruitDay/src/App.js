import React from 'react'
import $ from 'jquery'
import {Route,Switch,Redirect} from 'react-router-dom'

import Footer from './com/Footer.jsx'

import Home from './com/Home.jsx';
import HomeHeader from './com/HomeHeader.jsx';
import Kind from './com/Kind.jsx';
import KindHeader from './com/KindHeader.jsx';
import Cart from './com/Cart.jsx';
import CartHeader from './com/CartHeader.jsx';
import User from './com/User.jsx';
import UserHeader from './com/UserHeader.jsx';
import NoMatch from './com/NoMatch.jsx';
import NoMatchHeader from './com/NoMatchHeader.jsx';
import Register from './com/Register.jsx';
import RegisterHeader from './com/RegisterHeader.jsx';
import Users from './com/Users.jsx';
import UsersHeader from './com/UsersHeader.jsx';
import Tcode from './com/Tcode.jsx';
import TcodeHeader from './com/TcodeHeader.jsx';
class App extends React.Component {
  constructor(props){
    super(props)
    
  }
  
  render(){
    return (
      <div className = "container">
          <header id="header">
            <Switch>
             {/* <Route path = "/" exact component = {HomeHeader} />*/}
              <Route path='/home' component = {HomeHeader} />
              <Route path='/kind' component = {KindHeader} />
              <Route path='/cart' component = {CartHeader} />
              <Route path='/users' component = {UsersHeader} />
              <Route path='/user' component = {UserHeader} />
              <Route path='/tcode' component = {TcodeHeader} />
               <Route path='/register' component = {RegisterHeader} />
              <Redirect  from ="/" to="/home" />
              <Route component = {NoMatchHeader} />
            </Switch>
          </header>
          <div id='content'>
            <Switch>
             {/* <Route path = "/" exact component = {Home} />*/}
              <Route path='/home' component = {Home} />
              <Route path='/kind' component = {Kind} />
              <Route path='/cart' component = {Cart} />
              <Route path='/users' component = {Users} />
              <Route path='/user' component = {User} />
              <Route path='/tcode' component = {Tcode} />
               <Route path='/register' component = {Register} />
               <Redirect  from ="/" to="/home" />
              <Route component = {NoMatch} />
            </Switch>
          </div>
          <footer id="footer">
              <Footer />
          </footer>
      </div>
    )
  }
}

export default App;