import React from 'react'
import MyAjax from './../md/MyAjax.js'
import { Link } from 'react-router-dom'

class ListMain extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	getData(id){
//	    console.log("id" + id+ "的数据")
	    var that = this;
	    var url = 'http://10.9.160.202:8000/kind/getKindListList';
	    MyAjax.getData(url, {
	      params:{
	        proList_ListID:id
	      }
	    }, (data) => {
	    	console.log(data)
		    that.setState({
		    	list:data[0].list
		    })
	    })
	}
	componentWillMount(){
		console.log(this.props.match.params.id)
		var id = this.props.match.params.id
		this.getData(id)
	}
	componentWillReceiveProps(nextProps){
	    var id = nextProps.match.params.id;
	    this.getData(id)
  }
	render(){
		console.log(this.state.list)
		var arr=[]
		this.state.list.map((item,index)=>{
			arr.push(<li key={index}>{item.product_name}</li>)
		})
		return(
			<div>{arr}</div>
		)
	}
}
export default ListMain;