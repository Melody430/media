import React,{Component} from "react"
import "../style/head.css"

class HeadNav extends Component{

	render(){
		return(
			<div className="header">
				<section>
					<div className="center">
						<div className="center-inner"></div>
					</div>

					<div className="left"><img src={require('../images/logo-title.png')} alt=""/></div>
					<div className="right"><span>登录</span><span>注册</span></div>
				</section>
			</div>
			)
	}
}

export default HeadNav;