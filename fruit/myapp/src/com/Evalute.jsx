import React from 'react'
import './../css/Evalute.css'
import ReactDOM from 'react-dom'
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;
class Evalute extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  click(){
	  confirm({
	    title: 'Do you Want to delete these items?',
	    content: 'Some descriptions',
	    onOk() {
	      console.log('OK');
	    },
	    onCancel() {
	      console.log('Cancel');
	    },
	  });
  }
  render(){
    return (
      <div className="eva">
      	<div className="goodEva">
      		<p className="qu-goodEva" onClick={this.click.bind(this)}>
      			<span>98%</span><br />
      			<span>好评</span>
      		</p>
      		<div className="star">
      			<p>口感
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/half_star@3x-f43e6f0b42.png" />
      			</p>
      			<p>颜值
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/lighting_star@3x-cedc664b96.png" />
      				<img src="https://wap.fruitday.com/content/images/main/half_star@3x-f43e6f0b42.png" />
      			</p>
      		</div>
      	</div>
      	<div className="evaCount">
      		<div className="evaCount-main">
      			<span>评价2490</span>
      			<span>晒图611</span>
      		</div>
      	</div>
      	<div className="eva-bottom">
      		<div className="eva-bot-top">
      			<span><i className="iconfont icon-duigou"></i></span>
      			<p>只看有内容的评价</p>
      		</div>
      		<div className="eva-info">
      			<div className="eva-info1">
	      			<img src="https://apicdn.fruitday.com/img/user/170211/wXFvIr/photo.jpg-usermiddle" />
	      			<span>147****0840</span>
      			</div>
      			<span>2017-12-23</span>
      		</div>
      		<p>
      			<span>口感&nbsp;5</span>
      			<span>颜值&nbsp;5</span>
      		</p>
      		<em>还没有吃</em>
      		<div className="info-img">
      		<img src="https://apicdn.fruitday.com/img/comment/171223/S7dnr8/photo0.jpg" />
      		<img src="https://apicdn.fruitday.com/img/comment/171223/UQlCzn/photo1.jpg" />
      		<img src="https://apicdn.fruitday.com/img/comment/171223/tv23HC/photo2.jpg" />
      		</div>
      	</div>
      	<div className="footD">
			  	<div></div>
			    <p><i className="iconfont icon-gouwuche"></i></p>
			    <div className="addcart">
			    	明日达<span>加入购物车</span>
			    </div>
	  		</div>
      </div>
    )
  }
}

export default Evalute;