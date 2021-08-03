// App组件
import React, { Component } from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import Tabbar from './components/Tabbar'
import Home from './pages/Home'
import Index from './pages/Index'
import Mart from './pages/Mart'	
import Order from './pages/Order'			
import Mine from './pages/Mine'
import Login from './pages/Login'
import Registered from './pages/Registered'
import RegistrationTerms from './pages/Registered/RegistrationTerms'
import './App.css';
export default class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/index" component={Index} />
					<Route path="/mart" component={Mart} />
					<Route path="/order" component={Order} />
					<Route path="/mine" component={Mine} />
					<Route path="/login" component={Login} />
					<Route path="/registered" component={Registered} />
					<Route path="/registered/registrationTerms" component={RegistrationTerms} />
					{/* 重定向 */}
					<Redirect to="/home"></Redirect>
				</Switch>
				<Tabbar />
			</div>
		)
	}
}
