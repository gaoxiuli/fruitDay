import React from 'react'
import MyAjax from './../md/MyAjax.js'
import {NavLink } from 'react-router-dom'
import './../css/FooterD.css'

class FooterD extends React.Component {
	constructor(props){
	    super(props)
	    this.state = {
	    	proItem:[],
	    	pro:''
	    }
 	}
	addCart(){
		alert(1)
	}
	render(){
		return(
			<div className="footD">
			  	<div></div>
			    <p><i className="iconfont icon-gouwuche"></i></p>
			    <div className="addcart" onClick={this.addCart.bind(this)}>
			    	明日达<span>加入购物车</span>
			    </div>
	  		</div>
		)
	}
}

export default FooterD;