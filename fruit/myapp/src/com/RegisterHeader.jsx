import React from 'react'

class LoginHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return (
       <div className="uHead">
      	<i className="iconfont icon-arrow-left"></i>
      	<p>注册</p>
      	<div></div>
      </div>
    )
  }
}

export default LoginHeader;