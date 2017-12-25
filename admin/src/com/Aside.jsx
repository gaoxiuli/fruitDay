import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import $ from 'jquery'
class Aside extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	flagKind:false
    }
  }
  componentDidMount(){
  }
  clickKind(){
  	if(this.state.flagKind){
	  	$(".kcontent").slideUp(800)
	  	this.setState({
	  		flagKind:false
	  	})
  	}else{
  		$(".kcontent").slideDown(800)
	  	this.setState({
	  		flagKind:true
	  	})
  	}
  	console.log(this.state.flagKind)
  }
  render(){
    return (
       <div className="aside">
       	  <div className="asideTop">
       	  	<i className="iconfont icon-linelist"></i>
       	  	菜单列表
       	  </div>
       	  <h2  onClick={this.clickKind.bind(this)}><i className="iconfont icon-ren"></i>基本设置</h2>
       	  <ul className="kcontent">
       	  	<li><NavLink activeClassName="active" to="/login_update"><i className="iconfont icon-arrRight-fill"></i>修改密码</NavLink></li>
       	  	<li><NavLink activeClassName="active" to="/bannerlist"><i className="iconfont icon-arrRight-fill"></i>首页轮播</NavLink></li>
       	  	<li><NavLink activeClassName="active" to="/homelist"><i className="iconfont icon-arrRight-fill"></i>单页管理</NavLink></li>
       	  	<li><i className="iconfont icon-arrRight-fill"></i>留言管理</li>
       	  	<li><NavLink activeClassName="active" to="/user"><i className="iconfont icon-arrRight-fill"></i>用户管理</NavLink></li>
       	  </ul>
       	  <h2><li><i className="iconfont icon-xiugai"></i><NavLink activeClassName="active" to="/kind">分类管理</NavLink></li></h2>
       </div>
    )
  }
}

export default Aside;