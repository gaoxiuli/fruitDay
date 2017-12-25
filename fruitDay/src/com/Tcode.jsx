import React from 'react'
import './../css/Tcode.css'
import fly from './../image/fly.png'
import member from './../image/member-scan-img-3e59c116d0.png'
import code from './../image/er.png'
import $ from 'jquery'
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
//	document.getElementById("footer").style.display = "none"
  }
  move(){
  	$("#move").animate({'left':207},5000,()=>{
  		left:0
  	})
  }
  render(){
    return (
      <div className="main-code">
  			<span className="move" onLoad={this.move.bind(this)}><img src={fly} id="fly"/></span>
  			<img src={member} id="member"/>
  			<div className="tCode">
  				<img src={code} id="code"/>
  				<em>每30秒自动刷新</em>
  			</div>
      </div>
    )
  }
}

export default Login;