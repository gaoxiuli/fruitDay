import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import MyAjax from './../md/MyAjax.js'
import List from './List.jsx'
import './../css/kind.css'
class Kind extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      classList:[]
    }
  }
  componentWillMount () {
    var that = this;
    var url = 'http://10.9.160.202:8000/kind/kindList'
    MyAjax.getData(url, {}, (data) => {
//    console.log(data)
      that.setState({
        classList:data
      })
    })
  }
  render(){
    var arr = []
    this.state.classList.map((item, index) => {
      arr.push(<NavLink activeClassName="active" to={"/kind/" + item.id} key={item.id}><li >{item.name}</li></NavLink>)
    })
    console.log(arr)
    return (
       <div className="kindList">
        <ul className="ulList">{arr}</ul>
        <ul className="detailList">
        	<p className="kind-top">
        	<div></div>
        	<span>果园优选</span><em>全部<i className="iconfont icon-mjiantou"></i></em>
        	</p>
        	<ul className="kind-main">
	        	<Switch>
		          <Route path="/kind/:id" component = {List} />
		          <Redirect from="/kind" to="/kind/1" />
		        </Switch>
        	</ul>
        </ul>
       </div>
    )
  }
}

export default Kind;