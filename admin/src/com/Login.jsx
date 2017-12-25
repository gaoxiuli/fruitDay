import React from 'react'
import ReactDOM from 'react-dom'
import './../login.css'
import MyAjax from './../md/MyAjax.js'
import $ from 'jquery'
class login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
  }
  getData(){
  	var that =this;
 	 $.ajax({
  	  	type:"get",
  	  	url:"http://10.9.160.202:8000/login_register/loginHou",
  	  	data:{
  	  		username:that.refs.username.value,
  				password:that.refs.password.value
  	  	},
  	  	success:function(data){
  	  	  console.log(data)
  	  	  if(data == "0"){
  	  	    alert("用户未注册")
  	  	  }else if(data == "2"){
  	  	    alert("密码错误")
  	  	  }else if(data == "1"){
//	  	    alert("ok")
  	  	    localStorage.setItem("username",that.refs.username.value)
//	  	  	console.log(that)
  	  	  	that.props.history.push('/')
  	  	  }else if(data =="-1"){
  	  	    alert("登录失败")
  	  	  }
  	  	}
  	  });

 }
  btnClick(){
  	this.getData();
  }
	userBlur(){
		if(this.refs.username.value != ""){
			$(".user").css("display","none");
			$("#users").css("border-color","#0ae");
			$(".icon-ren").css("color",'#000');
		}else{
			$(".user").css("display","block");
			$("#users").css("border-color","red");
			$(".icon-ren").css("color",'red');
		}
	}
	pwdBlur(){
		if(this.refs.password.value != ""){
			$(".pwd").css("display","none");
			$("#pwd").css("border-color","#0ae");
			$(".icon-yuechi").css("color",'#000');
		}else{
			$(".pwd").css("display","block");
			$("#pwd").css("border-color","red");
			$(".icon-yuechi").css("color",'red');
		}
	}
  render(){
    return (
       <div className="login">
     		 <div className="box">
     		 	 <h2>后台管理中心</h2>
     		 	 <div className="ipt"><input type="text" ref="username" placeholder="登录账号" onBlur={this.userBlur.bind(this)} id="users"/><i className="iconfont icon-ren"></i></div>
     		 	 <p className="user">请输入账号</p>
     		 	 <div className="ipt"><input type="password" ref="password" placeholder="登录密码" onBlur={this.pwdBlur.bind(this)} id="pwd"/><i className="iconfont icon-yuechi"></i></div>
     		 	 <p className="pwd">请输入登录密码</p>
     		 	 <button id="btn" onClick={this.btnClick.bind(this)}>登录</button>
     		 </div>
       </div>
    )
  }
}

export default login;