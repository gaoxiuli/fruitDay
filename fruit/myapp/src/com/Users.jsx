import React from 'react';
import './../css/users.css';
class Users extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	render(){
		return (
			<div className="main">
				<div className="main-top">
					<p><i className="iconfont icon-icon-"></i>我的订单</p>
					<span>全部订单<i className="iconfont icon-mjiantou"></i></span>
				</div>
				<ul className="main-center">
					<li>
						<i className="iconfont icon-fukuan"></i>
						<span>待付款</span>
					</li>
					<li>
						<i className="iconfont icon-fahuo"></i>
						<span>待发货</span>
					</li>
					<li>
						<i className="iconfont icon-shouhuo"></i>
						<span>待收货</span>
					</li>
					<li>
						<i className="iconfont icon-iconpingjia"></i>
						<span>待评价</span>
					</li>
					<li>
						<i className="iconfont icon-tuihuanhuo"></i>
						<span>退换货</span>
					</li>
				</ul>
				<div className="main-bottom">
					<p>
						<span>
							<i className="iconfont icon-crown"></i>
							<em>会员中心</em>
						</span>
						<span>
							<em>享等级特权</em>
							<i className="iconfont icon-mjiantou"></i>
						</span>
					</p>
					<p>
						<span>
							<i className="iconfont icon-goumai"></i>
							<em>企业购</em>
						</span>
						<span>
							<i className="iconfont icon-mjiantou"></i>
						</span>
					</p>
					<p>
						<span>
							<i className="iconfont icon-kefu"></i>
							<em>在线客服</em>
						</span>
						<span>
							<i className="iconfont icon-mjiantou"></i>
						</span>
					</p>
				</div>
			</div>
		)
	}
}

export default Users;