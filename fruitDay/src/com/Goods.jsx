import React from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import './../css/goods.css'
import $ from 'jquery'
class Goods extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	data:[]
    }
  }
  componentWillMount(){
  	var url = 'http://10.9.160.202:8000/kind/homeDetails';
  	$.ajax({
  		type:"get",
  		url:"http://10.9.160.202:8000/kind/homeDetails",
			success:function(data){
				console.log(data)
			}
  	});
  }
  render(){
    return (
      <div className="goods">
      	 <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a
              key={ii}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="goods-words">
        	<h3>智利甜心樱桃</h3>
        	<h5>J级樱桃&nbsp;空运最新到货&nbsp;甜脆依旧</h5>
        	<div className="price">
        		￥<span>49</span>.9<em>￥49.90</em>
        	</div>
        	<div className="weight">
        		<span>500g</span><br/>
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
      </div>
    )
  }
}

export default Goods;