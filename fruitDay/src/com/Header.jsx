import React from 'react'
import {NavLink} from 'react-router-dom'
import './../css/Header.css';
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	proItem:[]
    }
  }
  back(){
  	window.history.back();
  }
  addCart(){
  	
  }
  render(){
	  return (
	    <div className = "container">
	        <header id="headerD">
	          <i className="iconfont icon-arrow-left" onClick={this.back.bind(this)}></i>
			      	<ul>
			      		<li><NavLink activeClassName="activeD" to="/detail/:goodsID/goods">商品</NavLink></li>
			      		<li><NavLink activeClassName="activeD" to="/detail/:goodsID/xiang">详情</NavLink></li>
			      		<li><NavLink activeClassName="activeD" to="/detail/:goodsID/evalute">评价</NavLink></li>
			      	</ul>
			      	<div className="more"><i className="iconfont icon-gengduo"></i></div>
	        </header>
	        
	    </div>
	  )

  }
 }

export default Header;