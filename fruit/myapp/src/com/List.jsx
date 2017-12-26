import React from 'react'
import { Link } from 'react-router-dom'
import MyAjax from './../md/MyAjax.js'
class List extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this)
    this.state = {
      list:[]
    }
  }
  getData(id){
    console.log("id" + id+ "的数据")
    
    var that = this;
    var url = 'http://10.9.160.202:8000/kind/getKindList';
    
    MyAjax.getData(url, {
      params:{
        prolistID: id
      }
    }, (data) => {
    	console.log(data)
//	    console.log(eval(data))
	    that.setState({
	      list:data[0].pro
	    })
    })
    
  }
  //第一次进来获取一下值  ----  classID   --- ajax请求
  componentWillMount(){
    //先打印this分析数据
//  console.log(this.props.match.params.classID)
    var id = this.props.match.params.id;
    this.getData(id)
  }
  //点击左侧列表，url地址栏发生变化，监听组件的更新  ---  vue中的watch
  componentWillReceiveProps(nextProps){
//  console.log(nextProps.match.params.id)
    var id = nextProps.match.params.id;
    this.getData(id)
  }
  
  render(){
    var arr = []
    var brr = []
    console.log(this.state.list)
    if(this.state.list.length > 0){
      this.state.list.map((item, index) => {
        arr.push(<Link to={"/detail/" + item.id} key={item.id}>
        <img src={item.class_photo}/><br />
        <span>{item.name}</span>
        </Link>)
      })
    }else{
      arr = "暂无数据"
    }
    return (
      <ul>{arr}</ul>
    )
  }
}

export default List;