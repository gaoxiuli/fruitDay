import React from 'react'
import './../css/TcodeHeader.css';

class LoginHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  back(){
  	window.history.back();
  }
  render(){
    return (
      <div className="uHead">
      	<i className="iconfont icon-arrow-left" onClick={this.back.bind(this)}></i>
      	<p>我的会员码</p>
      	<div><i className="iconfont icon-gengduo"></i></div>
      </div>
    )
  }
}

export default LoginHeader;