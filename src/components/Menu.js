import React,{Component} from 'react'
import { Link } from 'react-router'
import { Menu, Icon, Row, Col,Avatar } from 'antd';
import '../style/menu.css'


class NavMenu extends Component{
	state = {
	    current: 'mail',
	  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
	render(){
		return(
			<Row className="menus">
				<Col span={10} className="logo"><img src={require('../images/logo-title.png')} alt=""/></Col>
				<Col span={10}>
					<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
				        <Menu.Item key="home">
				          <Link to="/index"><Icon type="home" style={{ fontSize: '22px' }}/>首页</Link>
				        </Menu.Item>

				        <Menu.Item key="app">
				           <Link to="/putIn"><Icon type="tags"  style={{ fontSize: '22px' ,color:'#008dff'}}/>投放</Link>
				        </Menu.Item>

				        <Menu.Item key="template">
				          <Link to="/template"><Icon type="appstore"  style={{ fontSize: '22px',color:'#008dff' }}/>模板</Link>
				        </Menu.Item>

				        <Menu.Item key="alipay">
				        	<Link to="/user"><Icon type="user" style={{ fontSize: '22px',color:'#008dff' }}/>我的账户</Link>
				        </Menu.Item>
				    </Menu>
				</Col>
				<Col span={4} className="acounter">
					<span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
					<span>杨小白</span>
					<span><Icon type="logout" /></span>
				</Col>

			</Row>
			
			)
	}
}

export default NavMenu;