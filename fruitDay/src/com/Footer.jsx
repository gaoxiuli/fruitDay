import React from 'react'
import ReactDom from 'react-dom'

import {NavLink,Link} from 'react-router-dom'

const Footer = () =>(
	<ul> 
		<li><NavLink activeClassName='active' to='/home'><i className="iconfont icon-shouye"></i>   首页</NavLink></li>
		<li><NavLink activeClassName='active' to='/kind'><i className="iconfont icon-leimupinleifenleileibie"></i>   分类</NavLink></li>
		<li><NavLink activeClassName='active' to={localStorage.getItem('user')? '/cart' : '/user'}><i className="iconfont icon-gouwuche"></i>   购物车</NavLink></li>
		<li><NavLink activeClassName='active' to={localStorage.getItem('user')? '/users' : '/user'}><i className="iconfont icon-gerenzhongxin"></i>   我的</NavLink></li>
	</ul>
)

export default Footer;