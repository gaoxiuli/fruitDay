import React from 'react'
import Hcart from './../css/Hcart.scss'
import $ from 'jquery'
class CartHeader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	back(){
		this.props.history.goBack();
	}
	render(){
		return(
			<div className='hcart'>
				<span onClick={this.back.bind(this)}><i className='iconfont icon-arrow-left'></i></span>
				<span className='cart'>购物车</span>
				<span className='rcart'></span>
			</div>
		)
	}
}

export default CartHeader;