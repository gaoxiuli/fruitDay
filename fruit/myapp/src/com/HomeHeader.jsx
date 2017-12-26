import React from 'react'
import Header from './../css/HomeHeader.css'

class HomeHeader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div className='head' id="head">
				<div className="position">
					<div  id="arri-time">
						<img id='pic' src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png"/>
					</div>
					<div id="map">保利·罗兰香谷(保利·芳园西北)</div>
					<i className="iconfont icon-xiasanjiao"></i>
				</div>
				<i className='iconfont icon-searchbluet'></i>
			</div>
		)
	}
}

export default HomeHeader;