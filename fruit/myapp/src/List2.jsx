import React from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import MyAjax from './md/MyAjax.js'
import NoMatch from './com/NoMatch.jsx';
import './css/List2.css'
import { Link } from 'react-router-dom'
import ListMain from './com/ListMain.jsx'
class List2 extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			list:[],
			preList:[],
			classList:[],
			listList:[],
			preList_id:[],
			preList_name:[],
			err:[]
		}
	}
	//请求List2的数据
	//请求List的数据
  getListData(id){
//  console.log("id" + id+ "的数据")
    var that = this;
    var drr=[];
    var url = 'http://10.9.160.202:8000/kind/getKindList';
    MyAjax.getData(url, {
      params:{
        prolistID: 303
      }
    }, (data) => {
    	data[0].pro.forEach((item, index) => {
    		drr.push({
    			id:item.id,
    			name:item.name
    		})
    	})
    	that.setState({
			err:drr
		})
	    that.setState({
	      listList:data[0].pro
	    })
    })
  }
	componentWillMount(){
		console.log(this)
	//请求kind的数据
	var that = this;
    var id = this.state.classList.id;
    this.getListData(id)
  }
  back(){
  	window.history.back();
  }
	render(){
		var brr = []
		this.state.err.map((item,index) =>{
			brr.push(<li key={index}><NavLink activeClassName='active' to={'/list2/'+item.id}>{item.name}</NavLink></li>)
		})
		return(
			
			<div className="container">
				<header id="header">
					<i className="iconfont icon-arrow-left" onClick={this.back.bind(this)}></i>
			      	<p>果园优选</p>
			      	<div id="search"><i className="iconfont icon-sousuo"></i></div>
				</header>
				<div id="content">
					<ul id="swip">
					{brr}
					</ul>
					<ul className="content-top">
						<li>综合</li>
						<li>销量</li>
						<li>价格</li>
					</ul>
					<Switch>
			          <Route path="/list2/:id" component = {ListMain} />
			          <Redirect from="/kind" to="/kind/1" />
			        </Switch>
				</div>
			</div>
		)
	}
}
export default List2