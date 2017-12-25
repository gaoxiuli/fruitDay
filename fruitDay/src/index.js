import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import App from './App';
import './main.scss';
import Detail from './Detail.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(
	<Router>
	    <Switch>
	    	<Route component = {Detail} path = "/detail/:goodsID"/>
	      	<Route component = {App} path = "/"/>
	    </Switch>
  	</Router>, document.getElementById('root'));
registerServiceWorker();
