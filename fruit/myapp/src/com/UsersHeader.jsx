import React from 'react'
import './../css/UsersHeader.css'
class UsersHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
clicUser(){
	
}
  render(){
    return (
      <div className="usersHead">
      	<div className="usersTop">
      		<div className="img" onClick={this.clicUser.bind(this)}></div>
      		<div className="info">
      			<p onClick={this.clicUser.bind(this)}>{localStorage.getItem("user")}</p>
      			<span>签到送好礼</span>
      		</div>
      		<p id="er">
      			<i className="iconfont icon-erweimaicon"></i>
      			<span>会员码</span>
      		</p>
      	</div>
      	<div className="kindList">
      		<span>积分</span>
      		<span>余额<em>0</em></span>
      		<span>优惠劵<em>3</em></span>
      		<span>礼品<em>0</em></span>
      	</div>
      </div>
    )
  }
}

export default UsersHeader;