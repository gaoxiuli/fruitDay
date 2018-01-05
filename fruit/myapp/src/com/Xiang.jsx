import React from 'react'
import './../css/xiang.css'
class Xiang extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return (
      <div id="xiang">
      	<table border='1'>
      		<tr>
      			<td>产地</td>
      			<td>新西兰</td>
      		</tr>
      		<tr>
      			<td>营养元素</td>
      			<td>VB6,钙,锌</td>
      		</tr>
      		<tr>
      			<td>烹饪方法</td>
      			<td>焖煮,红烧等</td>
      		</tr>
      		<tr>
      			<td>储藏方法</td>
      			<td>-18°~0°冷冻</td>
      		</tr>
      		<tr>
      			<td>温馨提示</td>
      			<td>新老包装随机发送</td>
      		</tr>
      	</table>
      	<img src="https://imgjd4.fruitday.com/up_images/20171201/15121313421791.jpg" />
      	<img src="https://imgjd4.fruitday.com/up_images/20171201/15121313449859.jpg" />
      	<img src="https://imgjd4.fruitday.com/up_images/20171201/15121313452613.jpg" />
      	<img src="https://imgjd8.fruitday.com/up_images/20171220/1513762362174.jpg" />
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

export default Xiang;