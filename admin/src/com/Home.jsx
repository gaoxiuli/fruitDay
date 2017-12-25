import React from 'react'
import ReactDOM from 'react-dom'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    document.getElementById("footer").style.display = "block"
  }
  render(){
    return (
       <div>
       首页内容
       </div>
    )
  }
}

export default Home;