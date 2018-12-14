import React,{Component} from 'react'
import "../style/carousel.css"
import { Carousel } from 'antd';

class PicShow extends Component{
	constructor(props) {
    super(props)
      this.state = {banner:[]};
  }
   componentWillReceiveProps(){
   
   	this.setState({banner:this.props.loopBanner})
   
   };
	render(){
		const picArr = this.props.loopBanner;

		return(
			 <Carousel autoplay>
				{picArr.map((pic)=>{
					return (
							<div style={{height:`600px`}}>
						 	 	<img src={pic} alt="pic" style={{ display: `block`, width: `100%`, marginRight: `100%` }} />
						 	 </div>
						)
					
				})}
			 	
			 
			  </Carousel>
			)
	}
}

export default PicShow;