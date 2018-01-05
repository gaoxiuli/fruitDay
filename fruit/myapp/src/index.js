import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import App from './App';
import List2 from './List2.jsx'
import './main.scss';
import Detail from './Detail.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
	    <Switch>
	    	<Route component = {List2} path = "/list2/:goodsID"/>
	    	<Route component = {Detail} path = "/detail/:goodsID"/>
	      	<Route component = {App} path = "/"/>
	    </Switch>
  	</Router>, document.getElementById('root'));
registerServiceWorker();
