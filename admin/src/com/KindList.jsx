import React from 'react'
import ReactDOM from 'react-dom'
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	kindID:'',
    	kindList:[],
    	kindName:""
    }
  }
  componentDidMount(){
		this.getData()
  }
  componentWillMount(){
  	this.setState({
	  	kindID:this.props.match.params.kindID
  	})
  	this.getData()
  }
  componentDidUpdate(){
  	console.log(this.state.kindList)
  }
  getData(){
  	var that = this;
  	var url = 'http://10.9.160.202:8000/kind/getKindList';
  	MyAjax.getData(url,{
  		params:{
  			prolistID:that.state.kindID
  		}
  	},(data) => {
  		that.setState({
  			kindName:data[0].name,
  			kindList:data[0].pro
  		})
  	})
  }
  look(item){
//	console.log(this)
		this.props.history.push('/kind_list_list/'+item.id);
  }
  click_tj(){
  	$(".zzc").css("display","block")
  }
  click_close(){
  	$(".zzc").css("display","none")
  }
  render(){
    return (
        <div id="art">
     			<div className="articleTop">
       			<i className="iconfont icon-shouyedianji"></i>
       			首页<span>/</span>分类管理<span>/</span>{this.state.kindName}
       		</div>
      		<div className="banner" style={{overflow:"auto"}}>
      			<div className="zzc">
	       			<div className="zzcbox" width={450 +"px"} height={230 + "px"}>
	       				<div className="zzcTop">
	       					<span>添加信息</span><span onClick={this.click_close.bind(this)}><i className="iconfont icon-guanbi"></i></span>
	       				</div>
	       				<table border="1">
	       					<tbody>
	       						<tr>
	       							<td width="20%">ID</td>
	       							<td width="80%"><input type="text" ref="kindID"/></td>
	       						</tr>
		       						<tr><td>类别</td>
		       						<td><input type="text" ref="kindName"/></td>	
	       						</tr>
		       						<tr><td>请选择图片</td>
		       						<td><input type="file" name="file" id="file"/></td>	
	       						</tr>	
	       					</tbody>
	       				</table>
	       				<a id="zzc-tj" href="javascript:;">确认添加</a>
	       			</div>
	       		</div>
	       		
      			<div className="bans">
							  <div className="panel-head"><i className="iconfont icon-linelist"></i> 内容列表</div>
							  <div className="tj">
							  	<a onClick={this.click_tj.bind(this)}><i className="iconfont icon-jiahao"></i>添加分类</a>
							  </div>
							  <table className="table">
							    <tbody><tr className="tableTop">
							      <th width="10%">排序</th>
							      <th width="20%">图片</th>
							      <th width="20%">名称</th>
							      <th width="20%">ID</th>
							      <th width="20%">操作</th>
							    </tr>
							    {
							    	this.state.kindList.map((item, index) => {
							    		return <tr className="proBanner" id="proBanner" key={item.id}>
							      <td>{index*1+1}</td>
							      <td><img src={item.class_photo} width='100px'/></td>
							      <td>{item.name}</td>
							      <td>{item.id}</td>
							      <td style={{padding:5+"px"}}><div className="button-group">
							      <a className="button border-main" onClick={this.look.bind(this, item)}><i className="iconfont icon-xiugai"></i> 查看</a>
							      <a className="button border-red" href="javascript:void(0)"><i className="iconfont icon-shanchu"></i> 删除</a>
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