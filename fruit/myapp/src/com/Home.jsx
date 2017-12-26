import React from 'react'
import ReactDom from 'react-dom'
import Kind from './Kind.jsx';
import KindHeader from './KindHeader.jsx';
import Footer from './Footer.jsx';
import Header from './../css/Home.css'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import MyAjax from './../md/MyAjax.js'
import {NavLink} from "react-router-dom"
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data: ['', '', ''],
			bannerList:[],
			fruitList:[],
			fruitList2:[],
			bigList1:[],
			fruitList3:[],
			bigList2:[],
			fruitList4:[],
			bigList3:[],
			fruitList5:[],
			bigList4:[],
			fruitList6:[]
		}
	}
	componentWillMount(){
		var that=this;
		var url='http://10.9.160.202:8000/banner/bannerActive'
		MyAjax.getData(url,{},(datas)=>{
			that.setState({
				bannerList:datas
			})
		})
		var bannerurl='http://10.9.160.202:8000/banner/homeList2'
		MyAjax.getData(bannerurl,{},(data1)=>{
			console.log(data1)
			that.setState({
				fruitList:data1[2].content,
				fruitList2:data1[5].content,
				bigList1:data1[4].content[0].image,
				fruitList3:data1[9].content,
				bigList2:data1[6].content[0].image,
				fruitList4:data1[7].content,
				bigList3:data1[8].content[0].image,
				fruitList5:data1[12].content,
				bigList4:data1[11].content[0].image
			})
		})
		var url='http://10.9.160.202:8000/banner/homeListBottom'
		MyAjax.getData(url,{},(data2)=>{
			that.setState({
				fruitList6:data2
			})
		})
	}
	componentDidMount() {
	    // simulate img loading
	    setTimeout(() => {
	      this.setState({
	        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      });
	    }, 100);
	  }
	toKind(){
		var header=document.getElementById("header");
		var content=document.getElementById("content");
		var footer=document.getElementById("footer");
		ReactDom.unmountComponentAtNode(header);
		ReactDom.unmountComponentAtNode(content);
		ReactDom.unmountComponentAtNode(footer);
		ReactDom.render(<KindHeader />,header);
		ReactDom.render(<Kind />,content);
		ReactDom.render(<Footer pageIndex='1'/>,footer);
	}
	render(){
		var arr = []
	    this.state.fruitList.map((item, index) => {
	      arr.push(<NavLink to={"/detail/"+item.banner_ad_id} key={item.banner_ad_id}><li>
		      			<div className='left'><img src={item.image} /></div>
		      			<div className='right'>
				      		<p>{item.title}</p>
				      		<div className='prices clear'>
				      			<span>¥{item.price}/<em>{item.volume}</em></span>
				      			<i className='iconfont icon-gengduo'> </i>
				      		</div>
		      			</div>
		      		</li></NavLink>)
	    })
	    var brr = []
	    this.state.fruitList2.map((item, index) => {
	      brr.push(<NavLink to={"/detail/"+item.banner_ad_id} key={item.banner_ad_id}><li>
		      			<div className='left'><img src={item.image} /></div>
		      			<div className='right'>
				      		<p>{item.title}</p>
				      		<div className='prices clear'>
				      			<span>¥{item.price}/<em>{item.volume}</em></span>
				      			<i className='iconfont icon-gengduo'> </i>
				      		</div>
		      			</div>
		      		</li></NavLink>)
	    })
	    var crr = []
	    this.state.fruitList3.map((item, index) => {
	      crr.push(<NavLink to={"/detail/"+item.banner_ad_id} key={item.banner_ad_id}><li>
		      			<div className='left'><img src={item.image} /></div>
		      			<div className='right'>
				      		<p>{item.title}</p>
				      		<div className='prices clear'>
				      			<span>¥{item.price}/<em>{item.volume}</em></span>
				      			<i className='iconfont icon-gengduo'> </i>
				      		</div>
		      			</div>
		      		</li></NavLink>)
	    })
	    var drr = []
	    this.state.fruitList4.map((item, index) => {
	      drr.push(<NavLink to={"/detail/"+item.banner_ad_id} key={item.banner_ad_id}><li>
		      			<div className='left'><img src={item.image} /></div>
		      			<div className='right'>
				      		<p>{item.title}</p>
				      		<div className='prices clear'>
				      			<span>¥{item.price}/<em>{item.volume}</em></span>
				      			<i className='iconfont icon-gengduo'> </i>
				      		</div>
		      			</div>
		      		</li></NavLink>)
	    })
	    var err = []
	    this.state.fruitList5.map((item, index) => {
	      err.push(<NavLink to={"/detail/"+item.banner_ad_id} key={item.banner_ad_id}><li>
		      			<div className='left'><img src={item.image} /></div>
		      			<div className='right'>
				      		<p>{item.title}</p>
				      		<div className='prices clear'>
				      			<span>¥{item.price}/<em>{item.volume}</em></span>
				      			<i className='iconfont icon-gengduo'> </i>
				      		</div>
		      			</div>
		      		</li></NavLink>)
	    })
	    var frr = []
	    this.state.fruitList6.map((item, index) => {
	      frr.push(<NavLink to={"/detail/"+item.banner_ad_id} key={item.banner_ad_id}><li>
	      	<div  className="num5" >
		      	<div  className="num5_one">
		      	<a className='pip' style={{borderBottom:'none'}}>
			      	<div className='left'><img src={item.image}/></div>
			      	<div className='right'>
			      		<h5>{item.title}</h5>
			      		<p>{item.subtitle}</p>
			      		<a className='new' style={{opacity:'0'}}>{item.banner_tag}</a>
			      		<div className='price'>
			      			<span>¥{item.price}/<em>{item.volume}</em></span>
			      			<i className='iconfont icon-gengduo'> </i>
			      		</div>
			      	</div>
		      	</a>
		      	</div>
		      </div>
		      </li></NavLink>)
	    })
		return(
			<div className="cont">
			<WingBlank>
		        <Carousel
		          autoplay={true}
		          infinite
		          selectedIndex={1}
		        >
		          {this.state.bannerList.map((item,index) => (
		            <a
		              key={item._id}
		              href="http://www.alipay.com"
		              style={{ display: 'inline-block', width: '100%', height: '177px' }}
		            >
		              <li key={item._id}><img src={item.image} style={{ width: '100%', verticalAlign: 'top' }}/></li>
		            </a>
		          ))}
		        </Carousel>
		      </WingBlank>
		      <div className="num1">
		      	<a><img src='https://imgjd6.fruitday.com/images/2017-04-05/9a80964bf0201b57e8e9a4a382205fd7.png'/></a>
		      </div>
		      <div className="num2 clear">
			      <div className='num2_one'>
			      	<a><img src='https://imgqn9.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg'/></a>
			      	<a><img src='https://imgjd6.fruitday.com/images/2017-11-07/e7d6856c1d6007ac64114619c11a6c7b.jpg'/></a>
			      </div>
		      </div>
		      <div className="num3">
		      	<a className='left'><img src='https://imgjd2.fruitday.com/images/2017-09-15/9660d07715fa9eb2949ea2ef11b927eb.jpg'/></a>
		      	<div className="right">
		      		<a><img src='https://imgjd6.fruitday.com/images/2017-11-02/59e6a71280b833ca91364105ef7954af.jpg'/></a>
		      		<a><img src='https://imgjd1.fruitday.com/images/2017-09-01/ad5fe9fe4b715ecbffc0efb63b4c8540.jpg'/></a>
		      	</div>
		      </div>
		      <div  className="num4">
		      	<div className='num4_one'><a><h2>果园热卖</h2></a></div>
		      </div>
		      <div  className="num5">
		      	<div  className="num5_one">
		      	<a  className='pip'>
			      	<div className='left'><img src='https://imgjd6.fruitday.com/images/product_pic/5/1/1-370x370-5-81SX15YY.jpg'/></div>
			      	<div className='right'>
			      		<h5>越南红心火龙火</h5>
			      		<p>每天都要很健康</p>
			      		<p className='new' style={{opacity:'0'}}></p>
			      		<div className='price'>
			      			<span>¥49.9/<em>2.5kg</em></span>
			      			<i className='iconfont icon-gengduo'> </i>
			      		</div>
			      	</div>
		      	</a>
		      	</div>
		      </div>
		      <div className='num6'>
		      	<ul>
		      		{arr}
		      	</ul>
		      </div>
		      <div  className="num4">
		      	<div className='num4_one'><a><h2>新品首发<i className='iconfont icon-jiantou'></i></h2></a></div>
		      </div>
		      <div  className="num5">
		      	<div  className="num5_one">
		      	<a  className='pip'>
			      	<div className='left'><img src='https://imgqn8.fruitday.com/images/product_pic/4449/1/1-370x370-4449-X96XDH8P.jpg'/></div>
			      	<div className='right'>
			      		<h5>佳沛意大利金奇异果</h5>
			      		<p>当季金果&nbsp; 甜滋水润</p>
			      		<a className='new'>新品</a>
			      		<div className='price'>
			      			<span>¥88/<em>12个</em></span>
			      			<i className='iconfont icon-gengduo'> </i>
			      		</div>
			      	</div>
		      	
		      	</a>
		      	</div>
		      </div>
		      <div className='num6'>
		      	<ul>
		      		{brr}
		      	</ul>
		      </div>
		       <div  className="num4">
		      	<div className='num4_one'><a><h2>精选专题</h2></a></div>
		      	<div className='left'><img src={this.state.bigList1}/></div>
		      </div>
		      <div className='num6'>
		      	<ul>
		      		{crr}
		      	</ul>
		      </div>
		      <div  className="num4">
		      	<div className='left'><img src={this.state.bigList2}/></div>
		      </div>
		      <div className='num6'>
		      	<ul>
		      		{drr}
		      	</ul>
		      </div>
		      <div  className="num4">
		      	<div className='left'><img src={this.state.bigList3}/></div>
		      </div>
		      <div className='num6'>
		      	<ul>
		      		{crr}
		      	</ul>
		      </div>
		      <div  className="num4">
		      	<div className='left'><img src={this.state.bigList4}/></div>
		      </div>
		      <div className='num6'>
		      	<ul>
		      		{err}
		      	</ul>
		      </div>
		      <div  className="num4">
		      	<div className='num4_one'><a><h2>人气推荐</h2></a></div>
		      </div>
		     <div className="num8">
		     <ul>
		     	{frr}
		     </ul>
		     </div>
		    </div>
		    
		)
	}
}

export default Home;