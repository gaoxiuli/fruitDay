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
    	uname:"",
    	pwd:""
    }
  }
  test(){
  	var val = document.getElementById('userPhone').value;
				var reg = /^1[34578]\d{9}$/;
				if(reg.test(val)){
					this.state.flagName = true;
//					 document.getElementById("login").removeAttribute("disabled");
				}else{
					this.state.flagName = false;
//					document.getElementById("login").setAttribute("disabled", "disabled");
//					alert("请输入正确的手机号码")
				}
  }
  login(){
  	if(!this.state.flagName){
  		alert("请输入正确的手机号")
  	}else{
			this.getData()

  	}
  }
  getPwd(){
  	var pwd = document.getElementById("password").value;
  	if(pwd==""){
  		this.state.flag = false;
  		document.getElementById("login").setAttribute("disabled", "disabled");
  	}else{
  		this.state.flag = true;
  		document.getElementById("login").style.backgroundColor = "#f93";
  		document.getElementById("login").removeAttribute("disabled");
  	}
  	this.setState({
  		uname:this.refs.username.value,
  		pwd:this.refs.password.value
  	})
  }
  register(){
  	this.props.history.push('/register');
  }
  getData(){
  	var that = this;
	$.ajax({
		type:"get",
		url:"http://10.9.160.202:8000/login_register/loginAction",
		data:{
			username: that.refs.username.value,
			password: that.refs.password.value
		},
		success:function(data){
			if(data == 1){
  			alert("登录成功")
				localStorage.setItem("user",that.refs.username.value)
				that.props.history.push('/users');
  		}else if(data == 0){
  			alert("用户未注册")
  		}else if(data == 2){
  			alert("密码错误")
  		}else{
  			alert("登录失败")
  		}
		}
	});
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
      		<input type="password" id="password" ref="password" placeholder="密码" onBlur={this.getPwd.bind(this)}/>
      		<div id="space"></div>
      		</p>
      		<div id="words"><span>首次用手机号登录将自动为您注册,并有豪礼相送</span></div>
      		<button id="login" onClick={this.login.bind(this)}>登录</button>
      		<div className="last-word">
      			<span>忘记密码?</span><span onClick={this.register.bind(this)}>未注册？去注册</span>
      		</div>
      	</form>
      </div>
    )
  }
}

export default User;