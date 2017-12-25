import React from 'react'
import ReactDOM from 'react-dom'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
  }
  render(){
    return (
       <div id="art">
     			<div className="articleTop">
       			<i className="iconfont icon-shouyedianji"></i>
       			首页<span>/</span>用户管理
       		</div>
       </div>
    )
  }
}

export default Home;