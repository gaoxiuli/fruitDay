import React from 'react'
import Carts from './../css/Cart.scss'
import $ from 'jquery'
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			flag:true,
			flags:true
		}
	}
	
	Onsel(){
		var flag=true
		$(".conta").on('click',"li",function(){
			if(flag){
				$(".cont_li>i").removeClass("icon-1").addClass("icon-duigou")
				flag=false
			}else{
				$(".cont_li>i").removeClass("icon-duigou").addClass("icon-1")
				flag=true 
			}
				
		})
			
	}
	Onsels(){
		if(this.state.flags){
			$(".left>i").removeClass("icon-1").addClass("icon-duigou")
			this.state.flags=false
		}else{
			$(".left>i").removeClass("icon-duigou").addClass("icon-1")
			this.state.flags=true 
		}
	}
	render(){
		return(
			<div className='cart'>
				<div className='address_con'>
					<a className='adress'>
						<div className='add'>
							<i className='iconfont icon-didian'></i>
							<div className='infor'>添加地址</div>
							<i className='iconfont icon-mjiantou'></i>
						</div>
					</a>
				</div>
				<div className='cart_con'>
					<div className='list_item'>
						商品清单<span>总重约:6.75kg</span>
					</div>
					<ul className='conta'  onClick={this.Onsel.bind(this)}> 
						<li className='cont_li'>
							<i className='iconfont icon-1'></i>
							<div className='imgs'> 
								<div className='pro_img'>
									<img src='https://imgqn1.fruitday.com/images/product_pic/3359/1/1-370x370-3359-P3H7U1D7.jpg' /> 
								</div>
								<div className='pro_info'>
									<h3>福建琬溪白玉蜜柚</h3>
									<h4></h4>
									<h5><span>2个</span>2.25Kg</h5>
									<p>
										<span>
											<small>¥</small>
											<em>19</em>
											<small>.9</small>
										</span>
										<span className='tag'>明日达</span>
									</p>
								</div>
							</div>
							<div className='num'>
								<i className='iconfont icon-asmkticon0223'></i>
								<span>2</span>
								<i className='iconfont icon-jia'></i>
							</div>
						</li>
					</ul>
				</div>
				<div className='foot'>
					<div className='foot_left'>
						<span className='left'><i className='iconfont icon-1' onClick={this.Onsels.bind(this)}></i>全选</span>
						<p>合计: <span>
							<small>¥</small>
							<em>19</em>
							<small>.9</small>
						</span></p>
					</div>
					<div className='foot_right'>
						<a className='dele'>结算</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Cart;