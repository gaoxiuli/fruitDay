import React from 'react'
import ReactDOM from 'react-dom'
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	kindListID:'',
    	kindList:[],
    	kindName:""
    }
  }
  componentDidMount(){
		this.getData()
  }
  componentWillMount(){
  	this.setState({
	  	kindListID:this.props.match.params.kindListID
  	})
  	this.getData()
  }
  componentDidUpdate(){
  	console.log(this.state.kindList)
  }
  getData(){
  	var that = this;
	var url = 'http://10.9.160.202:8000/kind/getKindListList';
  	MyAjax.getData(url,{
  		params:{
  			proList_ListID:that.state.kindListID
  		}
  	},(data) => {
		that.setState({
			kindName:data[0].name,
			kindList:data[0].list
		})
console.log(data)
  	})
  }
  look(item){
//	console.log(this)
		this.props.history.push('/kind_list_list/:'+item.id);
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
							      <th width="5%">排序</th>
							      <th width="10%">图片</th>
							      <th width="20%">名称</th>
							      <th width="20%">介绍</th>
							      <th width="10%">单价</th>
							      <th width="10%">单价量</th>
							      <th width="5%">ID</th>
							      <th width="20%">操作</th>
							    </tr>
							   {
							    	this.state.kindList.map((item, index) => {
							    		return <tr className="proBanner" id="proBanner" key={item.id}>
							      <td>{index*1+1}</td>
							      <td>
							      	<img src={item.photo} width='70px'/>
							      </td>
							      <td>{item.product_name}</td>
							      <td>{item.product_desc}</td>
							      <td>{item.price}</td>
							      <td>{item.volume}/{item.unit}</td>
							      <td>{item.id}</td>
							      <td style={{padding:5+"px"}}><div className="button-group">
							      <a className="button border-main" onClick={this.look.bind(this, item)}><i className="iconfont icon-xiugai"></i> 修改</a>
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