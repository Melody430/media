import React,{Component} from 'react'
import Menu from '../../components/Menu';
import '../../style/home.css'

class Home extends Component{
	render(){
		return(
			<div>
				<Menu />
				<div className="main">
					{this.props.children }
				</div>
				
			</div>
		)
		
	}
}

export default Home;