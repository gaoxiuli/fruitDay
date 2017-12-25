import React from 'react'
import ReactDOM from 'react-dom'
import './../kind.css'
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
import { Modal, message, Button } from 'antd';
const confirm = Modal.confirm;
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	kindList:[]
    }
  }
  componentWillMount(){
		this.getData()
  }
  getData(){
  	var that =this;
  	var url = 'http://10.9.160.202:8000/kind/kindList';
  	MyAjax.getData(url,{},(data) => {
			that.setState({
				kindList:data
			})
  	})
  }
 	setData(){
 		var that = this;
 		var url = 'http://10.9.160.202:8000/kind/addKindList';
 		MyAjax.getData(url,{
 			params:{
 				id:that.refs.kindID.value,
 				name:that.refs.kindName.value
 			}
 		}, (data) => {
 			if(data == 1){
  				message.success('添加成功');
  				$(".zzc").css("display","none")
  				window.location.reload();
 			}else{
 				 message.error('添加失败');
 			}
 		})
 	}
 	deleteData(item){
 		var that = this;
 		var url = 'http://10.9.160.202:8000/kind/deleteKindList';
 		MyAjax.getData(url,{
 			params:{
 				id:item.id
 			}
 		}, (data) => {
 				if(data == 1){
	  				message.success('删除成功');
	  				window.location.reload();
	 			}else{
	 				 message.error('删除失败');
	 			}
 		})
 	}
  componentDidMount(){
  	
  }
  click_tj_kind(){
  	$(".zzc").css("display","block")
  }
  click_close(){
  	$(".zzc").css("display","none")
  }
  click_ok(){
  	var that = this;
		confirm({
	    title: '确认要添加?',
	    content: 'id='+ that.refs.kindID.value + ', name=' + that.refs.kindName.value,
	    onOk() {
//	      console.log('确定');
					that.setData();
	    },
	    onCancel() {
//	      console.log('取消');
	    },
	  });
  }
  look(item){
//	console.log(item)
	this.props.history.push('/kind_list/'+ item.id );
  }
  click_delete(item){
  	var that = this;
		confirm({
	    title: '确认要删除?',
	    content:item.name,
	    onOk() {
					that.deleteData(item);
	    },
	    onCancel() {
	    },
	  });
  }
  render(){
    return (
       <div id="art">
     			<div className="articleTop">
       			<i className="iconfont icon-shouyedianji"></i>
       			首页<span>/</span>分类管理
       		</div>
      		<div className="banner" id="banner">
      			<div className="zzc">
	       			<div className="zzcbox">
	       				<div className="zzcTop">
	       					<span>添加信息</span><span onClick={this.click_close.bind(this)}><i className="iconfont icon-guanbi"></i></span>
	       				</div>
	       				<table border="1">
	       					<tbody>
	       						<tr>
	       							<td width="20%">ID</td>
	       							<td width="80%"><input type="text" ref="kindID"/></td>
	       						</tr>
		       						<tr><td>分类</td>
		       						<td><input type="text" ref="kindName"/></td>	
	       						</tr>		
	       					</tbody>
	       				</table>
	       				<a id="zzc-tj" href="javascript:;" onClick={this.click_ok.bind(this)}>确认添加</a>
	       			</div>
	       		</div>
      			<div className="bans">
							  <div className="panel-head"><i className="iconfont icon-linelist"></i> 内容列表</div>
							  <div className="tj">
							  	<a onClick={this.click_tj_kind.bind(this)}><i className="iconfont icon-jiahao"></i>添加分类</a>
							  </div>
							  <table className="table" >
							    <tbody><tr className="tableTop">
							      <th width="10%">排序</th>
							      <th width="35%">分类</th>
							      <th width="35%">ID</th>
							      <th width="20%">操作</th>
							    </tr>
							   	{
							    	this.state.kindList.map((item, index) => {
							    		return <tr className="proBanner" id="proBanner" key={item.id}>
							      <td>{index*1+1}</td>
							      <td>{item.name}</td>
							      <td>{item.id}</td>
							      <td style={{padding:5+"px"}}><div className="button-group">
							      <a className="button border-main" onClick={this.look.bind(this,item)}><i className="iconfont icon-xiugai"></i> 查看</a>
							      <a onClick={this.click_delete.bind(this, item)} className="button border-red" href="javascript:void(0)"><i className="iconfont icon-shanchu"></i> 删除</a>
							      </div></td>
							    </tr>
							    	})
							   	}
							  </tbody>
							 </table>
      			</div>
      			</div>
       </div>
    )
  }
}

export default Home;