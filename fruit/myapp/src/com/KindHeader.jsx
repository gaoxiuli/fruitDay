import React from 'react'
import './../css/kindHeader.css'
class KindHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
//  this.props.history.push("/home")
//  window.history.back();
//  this.props.history.goBack();
  render(){
    return (
      <div className="search">
      	<i className="iconfont icon-sousuo"></i>奇异果
      </div>
    )
  }
}

export default KindHeader;