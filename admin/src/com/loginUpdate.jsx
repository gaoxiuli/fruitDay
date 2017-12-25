import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import MyAjax from './../md/MyAjax.js'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.getData=this.getData.bind(this)
    this.state = {
    	key:"",
    	flagPwd:"",
    	flagNewpwd1:"",
    	flagNewpwd2:"",
    	pwd:"",
    	username:"",
    	oldPwd:''
    }
  }
  componentDidMount(){
  	var oldKey=localStorage.getItem('username');
  	this.setState({
	  	username:oldKey
  	})
  }
  getData(){
  	var that =this;
 	 	$.ajax({
  	  	type:"get",
  	  	url:"http://10.9.160.202:8000/login_register/updateHou",
  	  	data:{
  	  		username:that.state.username,
  				password:that.refs.newPassword1.value
  	  	},
  	  	success:function(data){
  	  	  console.log(data)
  	  	  if(data == "1"){
  	  	    alert("修改成功")
  	  	  }else{
  	  	  	alert("修改失败")
  	  	  }
  	  	}
  	  });
 }
  oldPwd(){
//	if(localStorage.getItem('admin') == this.refs.oldpwd.value ){
//		$("#oldPassword").css({"border-color":"#2c7"});
//		$("#oldPassword").parent().find("span").css("display","none");
//		this.state.flagPwd=true;
//	}else{
//		this.state.flagPwd=false;
//		$("#oldPassword").css({"border-color":"red"});
//		$("#oldPassword").parent().find("span").css("display","inline-block");
//	}
		var that = this;
		var url = 'http://10.9.160.202:8000/login_register/getHouMima';
		MyAjax.getData(url,{},(data) => {
//			console.log(data);
			that.state.oldPwd = data[0].password;
			console.log(that.state.oldPwd)
			if(that.state.oldPwd == this.refs.oldpwd.value){
				$("#oldPassword").css({"border-color":"#2c7"});
				$("#oldPassword").parent().find("span").css("display","none");
				that.state.flagPwd=true;
			}else{
				that.state.flagPwd=false;
				$("#oldPassword").css({"border-color":"red"});
				$("#oldPassword").parent().find("span").css("display","inline-block");
			}
		})
  }
  newPwd1(){
  	var reg=/\w{5,}/;
  	if(reg.test(this.refs.newPassword1.value)){
  		this.state.flagNewpwd1=true;
  		$("#newPassword1").css({"border-color":"#2c7"});
  		$("#newPassword1").parent().find("span").css("display","none");
  		this.setState({
  			pwd:this.refs.newPassword1.value
  		})
  	}else{
  		this.state.flagNewpwd1=false;
  		$("#newPassword1").css({"border-color":"red"});
  		$("#newPassword1").parent().find("span").css("display","inline-block");
  	}
  }
  newPwd2(){
  	if(this.refs.newPassword2.value == this.refs.newPassword1.value){
  		this.state.flagNewpwd2=true;
  		$("#newPassword2").css({"border-color":"#2c7"});
  		$("#newPassword2").parent().find("span").css("display","none");
  	}else{
  		this.state.flagNewpwd2=false;
  		$("#newPassword2").css({"border-color":"red"});
  		$("#newPassword2").parent().find("span").css("display","inline-block");
  	}	
  }
  clickPwd(){
	if(this.state.flagPwd && this.state.flagNewpwd1 && this.state.flagNewpwd2){
  		this.getData()
  	}
  }
  render(){
    return (
       <div id="art">
       		<div className="articleTop">
       			<i className="iconfont icon-shouyedianji"></i>
       			首页<span>/</span>修改密码
       		</div>
       		<div className="articleContent">
       			<div className="updateBox">
       				<div className="updateBoxTop">
       					<i className="iconfont icon-yuechi"></i>修改会员密码
       				</div>
       				<div className="upd">
       					<p><lable>管理员账号:</lable>admin</p>
       					<p><lable>原始密码:</lable><input type="text" id="oldPassword" ref="oldpwd" onBlur={this.oldPwd.bind(this)} placeholder="请输入原始密码"/><span>请输入原始密码</span></p>
       					<p><lable>新密码:</lable><input type="password" id="newPassword1" ref="newPassword1" onKeyUp={this.newPwd1.bind(this)} placeholder="请输入新密码"/><span>请输入新密码 新密码不能小于5位</span></p>
       					<p><lable>确认密码:</lable><input type="password" id="newPassword2" ref="newPassword2" onKeyUp={this.newPwd2.bind(this)}  placeholder="请再次输入新密码"/><span>请再次输入新密码</span></p>
       					<p><lable></lable><a href="javascript:;" onClick={this.clickPwd.bind(this)}><i className="iconfont icon-tijiao"></i>提交</a></p>
       				</div>
       			</div>
       		</div>
       </div>
    )
  }
}

export default Home;