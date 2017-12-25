import React from 'react'
import ReactDOM from 'react-dom'
import logo from './../image/y.jpg'
//import $ from 'zepto'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
		var logoImg=document.getElementById("logoImg");
		logoImg.onmouseenter=function(){
			
		}
		
  }
  loginOut(){
  	localStorage.removeItem("username");
  	window.location.reload()
  }
  render(){
    return (
       <div className="header">
   	     <div className="logo">
   	     	<img src={logo} id="logoImg"/>
   	     	后台管理中心
   	     </div>
   	     <div className="header1">
   	     	<ul>
   	     		<li><i className="iconfont icon-shouyedianji"></i><a href="http://10.9.160.205:8080/"> 前台首页</a></li>
   	     		<li onClick={this.loginOut.bind(this)}><i className="iconfont icon-tuichu"></i>退出登录</li>
   	     	</ul>
   	     </div>
       </div>
    )
  }
}

export default Home;