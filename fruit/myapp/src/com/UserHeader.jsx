import React from 'react'
import './../css/userHeader.css';
class UserHeader extends React.Component {
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
      	<p>账号密码登录</p>
      	<div></div>
      </div>
    )
  }
}

export default UserHeader;