import React from 'react'
import ReactDOM from 'react-dom'
import './../banner.css'
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.addCart=this.addCart.bind(this);
    this.state = {
    	bannerList:[],
    	flag:false
    }
  }
  componentWillMount(){
  	var that = this;
  	var url = 'http://10.9.160.202:8000/banner/bannerActive';
		MyAjax.getData(url,{},(data) => {
//			console.log(data)
			that.setState({
				bannerList:data
			})
		})
  }
  componentDidMount(){
  }
	addCart(){
    var that = this;
    if(!this.state.flag){
	    var url = 'http://10.9.160.202:8000/banner/addBanner'
	   }else{
    	var url="http://10.9.160.202:8000/banner/updateBanner"
    }
	   console.log(url)
    	 MyAjax.getData(url, {
	    	 params:{
	        banner_seq_id:that.refs.bannerID.value,
		      image:that.refs.url.value,
		      ms:that.refs.ms.value,
		      title:that.refs.titleBanner.value
	    		}
	      }, (data) => {
	    	console.log(data)
	      if(data == 2){
	        alert("商品已存在")
	      }else if(data == -1){
	        alert("添加失败")
	      }else if(data == 1){
	      	alert("添加成功");
	      	window.location.reload();
	      }else if(data==0){
	      	alert("没有该商品")
	      }
	    })
  }
  bannerTitle(){
  	if(this.refs.titleBanner.value){
  		$("#tit").css({"border-color":"#2c7"});
  		$("#tit").parent().find("span").css("display","none");
  	}else{
  		$("#tit").css({"border-color":"red"});
		$("#tit").parent().find("span").css("display","inline-block");
  	}
  	if(this.refs.bannerID.value){
  		$("#bID").css({"border-color":"#2c7"});
  		$("#bID").parent().find("span").css("display","none");
  	}else{
  		$("#bID").css({"border-color":"red"});
		$("#bID").parent().find("span").css("display","inline-block");
  	}	
  }
  addClick(id){
  	if (JSON.stringify(id)) {
        // 找到锚点
        let anchorElement = document.getElementById(id);
        console.log(anchorElement)
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
    this.state.flag=false;
    this.refs.titleBanner.value="";
    this.refs.url.value="";
    this.refs.ms.value="";
    this.refs.bannerID.value="";
    $("#bID").removeAttr("disabled");
  }
  updateClick(obj){
    if (JSON.stringify(obj.id)) {
        // 找到锚点
        let anchorElement = document.getElementById(obj.id);
        console.log(anchorElement)
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
    this.state.flag=true;
    this.refs.titleBanner.value=obj.it.title;
    this.refs.url.value=obj.it.image;
    this.refs.ms.value=obj.it.ms;
    this.refs.bannerID.value=obj.it.banner_seq_id;
    $("#bID").attr("disabled","disabled");
  }
  deleteBanner(item){
  	alert("确认要删除？")
  	var that = this;
  	var url="http://10.9.160.202:8000/banner/deleteBanner";
  	MyAjax.getData(url, {
	    	 params:{
	        banner_seq_id:item.banner_seq_id
	    		}
	      },(data) => {
	    	console.log(data)
	      if(data == -1){
	      	alert("删除失败")
	      }else if(data == 1){
		      window.location.reload()
						alert("删除成功")
	      }
	    })
  }
  render(){
    return (
       <div id="art">
       		<div className="articleTop">
       			<i className="iconfont icon-shouyedianji"></i>
       			首页<span>/</span>首页轮播
       		</div>
      		<div className="banner" style={{overflow:"auto"}}>
      			<div className="bans">
							  <div className="panel-head"><i className="iconfont icon-linelist"></i> 内容列表</div>
							  <div className="tj">
							  	<a onClick={this.addClick.bind(this,"add")}><i className="iconfont icon-jiahao"></i>添加内容</a>
							  </div>
							  <table className="table">
							    <tbody><tr className="tableTop">
							      <th width="10%">排序</th>
							      <th width="20%">图片</th>
							      <th width="15%">名称</th>
							      <th width="20%">描述</th>
							      <th width="10%">ID</th>
							      <th width="15%">操作</th>
							    </tr>
							    {
							    	this.state.bannerList.map((item, index) => {
							    		return <tr className="proBanner" key={item.banner_seq_id}>
							      <td>{index*1+1}</td>     
							      <td><img src={item.image} width="100px" height="40px"/></td>     
							      <td>{item.title}</td>
							      <td>{item.ms}</td>
							      <td>{item.banner_seq_id}</td>
							      <td><div className="button-group">
							      <a className="button border-main" onClick={this.updateClick.bind(this,{id:"add",it:item})}><i className="iconfont icon-xiugai"></i> 修改</a>
							      <a className="button border-red" href="javascript:void(0)" onClick={this.deleteBanner.bind(this,item)} ><i className="iconfont icon-shanchu"></i> 删除</a>
							      </div></td>
							    </tr>
							    	})
							    }
							  </tbody>
							 </table>
      			</div>
      			<div className="addBanner" id="add">
      				<div className="addBannerTop">
      					<i className="iconfont icon-xiugai"></i>
      					增加内容
      				</div>
      				<div className="add">
      					<p><lable>标题:</lable><input type="text" ref="titleBanner" onBlur={this.bannerTitle.bind(this)} id="tit"/><span>请输入标题</span></p>
      					<p><lable>URL:</lable><input type="text" ref="url"/></p>
      					<p><lable>图片:</lable><input type="text" /></p>
      					<p><lable>描述:</lable><textarea ref="ms"/></p>
      					<p><lable>ID:</lable><input type="text" ref="bannerID" onBlur={this.bannerTitle.bind(this)} id="bID"/><span>请输入ID</span></p>
      					<p><lable>&nbsp;&nbsp;</lable><a href="javascript:;" onClick={this.addCart.bind(this)}><i className="iconfont icon-tijiao"></i>提交</a></p>
      				</div>
      			</div>
      		</div>
       </div>
    )
  }
}

export default Home;