import React from 'react'
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'
import MyAjax from './md/MyAjax.js'
import Header from './com/Header.jsx'
import Goods from './com/Goods.jsx'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import NoMatch from './com/NoMatch.jsx';
import FooterD from './com/FooterD.jsx';
import Xiang from './com/Xiang.jsx';
import Evalute from './com/Evalute.jsx';
class Detail extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this)
		this.state = {
			proItem:[],
			id:0,
			detail_ID:this.props.match.params.goodsID
  	}
	}
	componentWillMount(){
		console.log(this)
		var id = this.props.match.params.goodsID
		this.getData(id)
	}
	getData(id){
		var that = this;
		var url = 'http://10.9.160.202:8000/kind/homeDetails'
		MyAjax.getData(url,{
			params:{
				detail_ID:id
			}
		},(data)=>{
			if(data == 0 ){
				this.setState({
					proItem:[]
				})
			}else{
				console.log(eval(data))
				this.setState({
					proItem:eval(data),
					id:eval(data)[0].id
				})	
			}
		})
	}
  render(){
  	return (
  		<div className = "container">
          <header id="header">
	      		<Switch>
	      			<Route path='/detail/:id' component = {Header} />
	      		</Switch>
          </header>
          <div id='content'>
        		<Switch>
	      			<Route path='/detail/:id/goods' component = {Goods} />
	      			<Route path='/detail/:id/xiang' component = {Xiang} />
	      			<Route path='/detail/:id/evalute' component = {Evalute} />
	      		</Switch>
          </div>
      </div>
  	)
  }
}

export default Detail;