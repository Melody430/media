import React,{Component} from 'react'
import Order from './order'

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class User extends Component{

	 constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }

  render(){
    
  	return(
  			<div>
  				<Tabs  defaultActiveKey="1" tabPosition="left" style={{ height:700 }}  >
          <TabPane tab="我的账户" key="1">Content of tab 1</TabPane>
          <TabPane tab="我的订单" key="2"><Order /></TabPane>
          <TabPane tab="我的投放" key="3">Content of tab 3</TabPane>
          <TabPane tab="我的收藏" key="4">Content of tab 4</TabPane>
          <TabPane tab="联系客服" key="5">Content of tab 5</TabPane>
          <TabPane tab="投放指南" key="6">Content of tab 6</TabPane>
          </Tabs>
  			</div>
  		)
  }
}
export default User;