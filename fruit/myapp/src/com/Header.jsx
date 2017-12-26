import React from 'react'
import {NavLink} from 'react-router-dom'
import './../css/Header.css';
import MyAjax from './../md/MyAjax.js'
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	proItem:[],
    	proID:"",
    	id:""
    }
  }
  componentWillMount(){
  	this.state.proID=this.props.match.params.id;
	}
  componentDidMount(){
  	this.state.proID=this.props.match.params.id;
  }
//	getData(id){
//		var that = this;
//		var url = 'http://10.9.160.202:8000/kind/homeDetails'
//		MyAjax.getData(url,{
//			params:{
//				detail_ID:id
//			}
//		},(data)=>{
//			console.log(data)
//			if(data == 0 ){
//				this.setState({
//					proItem:[]
//				})
//			}else{
////				console.log(eval(data))
//				this.setState({
//					proItem:eval(data),
//					id:eval(data)[0].id
//				})	
//			}
//		})
//	}
  back(){
  	window.history.back();
  }
  addCart(){
  	
  }
  render(){
  	this.state.proItem.map((item,index)=>{
  		
  	})
	  return (
	    <div className = "container">
	        <header id="headerD">
	          <i className="iconfont icon-arrow-left" onClick={this.back.bind(this)}></i>
			      	<ul>
			      		<li><NavLink activeClassName="activeD" to={"/detail/" + this.state.proID+"/goods"}>商品</NavLink></li>
			      		<li><NavLink activeClassName="activeD" to={"/detail/" + this.state.proID + "/xiang"} >详情</NavLink></li>
			      		<li><NavLink activeClassName="activeD" to={"/detail/" + this.state.proID + "/evalute"} >评价</NavLink></li>
			      	</ul>
			      	<div className="more"><i className="iconfont icon-gengduo"></i></div>
	        </header>
	        
	    </div>
	  )

  }
 }

export default Header;