import React from 'react'
import './../css/user.css';
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
class User extends React.Component {
  constructor(props){
    super(props)
    this.getData=this.getData.bind(this)
    this.state = {
    	flagName : false,
    	flag:false,
    	data : "",
    	pwd1:false,
    	pwd2:false
    }
  }
  getData(){
  	var that = this;
		$.ajax({
			type:"post",
			url:"http://10.9.160.202:8000/login_register/registerAction",
			data:{
				username:that.refs.username.value,
				password:that.refs.password1.value
			},
			success:function(data){
				if(data == 1){
					alert("注册成功");
					window.history.go(-2);
				}else if(data == 0){
					alert("用户已存在，请直接登录")
				}else{
					alert("注册失败");
				}	
			}
		});
  }
  test(){
  	var val = document.getElementById('userPhone').value;
				var reg = /^1[34578]\d{9}$/;
				if(reg.test(val)){
					this.state.flagName = true;
				}else{
					this.state.flagName = false;
				}
  }
  register(){
  	if(!this.state.flagName){
  		alert("请输入正确的手机号")
  	}else if(!this.state.pwd1){
  		alert("请输入至少六位的密码");
  	}else if(!this.state.pwd2){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  		alert("确认密码有误")
  	}else{
			this.getData()
  	}
  }
  getPwd1(){
  	var reg = /\w{6,}/;
  	if(reg.test(this.refs.password1.value)){
  		this.setState({
  			pwd1:true
  		})
  	}else{
  		this.setState({
  			pwd1:false
  		})
  	}
  }
  getPwd2(){
  	if(this.refs.password1.value == this.refs.password2.value){
  		this.setState({
  			pwd2:true
  		})
  	}else{
  		this.setState({
  			pwd2:false
  		})
  	}
  }
  login(){
  	this.props.history.push('/login');
  }

  render(){
//	console.log(this.state.data)
    return (
      <div className="user">
      	<form action="">
      		<p>
      		<i className="iconfont icon-shouji"></i>
      		<input type="text" id="userPhone" ref="username" placeholder="手机号" onBlur={this.test.bind(this)}/>
      		<div id="space"></div>
      		</p>
      		<p>
      			<i className="iconfont icon-yaochi"></i>
      			<input type="password" id="password" ref="password1" placeholder="请输入密码" onBlur={this.getPwd1.bind(this)}/>
      			<div id="space"></div>
      		</p>
      		<p>
      			<i className="iconfont icon-yaochi"></i>
      			<input type="password" placeholder="请确认密码" ref="password2" onBlur={this.getPwd2.bind(this)}/>
      			<div id="space"></div>
      		</p>
      		<div id="words"><span>首次用手机号登录将自动为您注册,并有豪礼相送</span></div>
      		<button id="login" onClick={this.register.bind(this)}>注册</button>
      		<div className="last-word">
      			<span onClick={this.login.bind(this)}>已注册？去登录</span>
      		</div>
      	</form>
      </div>
    )
  }
}

export default User;