import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from './com/Header.jsx';
import Aside from './com/Aside.jsx';
import loginUpdate from './com/loginUpdate.jsx';
import Banner from './com/Banner.jsx';
import HomeList from './com/HomeList.jsx';
import Kind from './com/Kind.jsx';
import KindList from './com/KindList.jsx';
import KindListList from './com/KindListList.jsx';
import User from './com/User.jsx';

class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    if(localStorage.getItem("username")){
	    return (
	      <div className="container">
		        <header id="header">
		        	<Header/>
		        </header>
		        <div id="content">
		        	<div id="aside">
		        		<Aside />
		        	</div>
		        	<div id="article">
		        		<Switch>
		        			<Route path="/user" component={User} />
		        			<Route path="/kind_list_list/:kindListID" component={KindListList} />
		        			<Route path="/kind_list/:kindID" component={KindList} />
		       				<Route path="/login_update" component={loginUpdate}/>
		       				<Route path="/bannerlist" component={Banner}/>
		       				<Route path="/homelist" component={HomeList} />
		       				<Route path="/kind" component={Kind} />
		       				<Redirect from ="/" to="/bannerlist" />
		       			</Switch>
		        	</div>
		        </div>
	      </div>
	    )
	}else{
		return <Redirect  from ="/#/login" to="/login" />
	}
  }
}

export default App;
