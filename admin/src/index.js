import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Login from './com/Login.jsx'

ReactDOM.render(
	<Router>
		<Switch>
			<Route component={Login} path = '/login'/>
			<Route component={App} path = '/' />
		</Switch>
	</Router>, document.getElementById('root'));
registerServiceWorker();
