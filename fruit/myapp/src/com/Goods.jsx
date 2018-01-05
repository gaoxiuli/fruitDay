import React from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import './../css/goods.css'
import $ from 'jquery'
import MyAjax from './../md/MyAjax.js'
class Goods extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this)
    this.state = {
    	proItem:[],
    	pro:'',
    	goodsID:''
    }
  }
  componentWillMount(){
  	console.log(this)
		var id = this.props.match.params.id
		this.getData(id)
  }
  getData(id){
		var that = this;
		var url = 'http://10.9.160.202:8000/kind/homeDetails'
		MyAjax.getData(url,{
			params:{
				detail_ID:id
			}
		},(data)=>{
			if(data == 0 ){
				this.setState({
					proItem:[]
				})
			}else{
				this.setState({
					proItem:eval(data),
					id:eval(data)[0].id,
					pro:eval(data)[0]
				})	
			}
		})
	}
  addCart(){
  	alert(1)
  }
  render(){
    return (
      <div className="goods">
      	 <WingBlank>
		        <Carousel
		          autoplay={true}
		          infinite
		          selectedIndex={1}
		        >
		          {this.state.proItem.map((item,index) => (
		            <a
		              key={item.banner_ad_id}
		              href="http://www.alipay.com"
		              style={{ display: 'inline-block', width: '100%', height: '177px' }}
		            >
		              <li key={item.banner_ad_id}><img src={item.image} style={{ width: '100%', verticalAlign: 'top' }}/></li>
		            </a>
		          ))}
		        </Carousel>
		      </WingBlank>
        <div className="goods-words">
        	<h3>{this.state.pro.title}</h3>
        	<h5>{this.state.pro.subtitle}</h5>
        	<div className="price">
        		￥<span>{this.state.pro.price}</span><em>￥{this.state.pro.price}</em>
        	</div>
        	<div className="weight">
        		<span>{this.state.pro.volume}</span><br/>
        		<span>明日达</span>
        	</div>
        	<h4>最快12月22日09:00-18:00送达</h4>
        </div>
        <div className="desty">
        	<p>送至</p><span><i className="iconfont icon-didian"></i>沙河镇</span>
        </div>
        <div className="tui">
        	<span><i className="iconfont icon-duigou"></i>48小时退换货</span>
        	<span><i className="iconfont icon-duigou"></i>全程冷链</span>
        	<span><i className="iconfont icon-duigou"></i>果园标准</span>
        	<span><i className="iconfont icon-duigou"></i>全球直采</span>
        </div>
        <div className="comment-total">
        	<p>
        		<span>评价(10674)</span>
        		<span><em>98%</em>好评<i className="iconfont icon-mjiantou"></i></span>
        	</p>
        </div>
        <div className="comment-main">
        	<div className="main-top">
        		<div>
        			<img src="https://imgjd4.fruitday.com/up_images/default_userpic.png"/>
        			<span>182********</span>
        		</div>
        		<span>2017-12-21</span>
        	</div>
        	<div className="main-center">
        		<span>口感5</span>
        		<span>颜值5</span>
        	</div>
        	<p className="feel">
        		很不错,新鲜,甜
        	</p>
        </div>
        <div data-ID = {this.state.goodsID}></div>
        <div className="footD">
			  	<div></div>
			    <p><i className="iconfont icon-gouwuche"></i></p>
			    <div className="addcart" onClick={this.addCart.bind(this)}>
			    	明日达<span>加入购物车</span>
			    </div>
	  		</div>
      </div>
    )
  }
}

export default Goods;