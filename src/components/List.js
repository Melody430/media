import React,{Component} from "react"
import '../style/list.css';
import { Row, Col,Button,Card,List} from 'antd';
import { browserHistory  } from 'react-router';


class ListGrid extends Component{

	PutInBtn(houseId){
		 browserHistory.push('/detail')
	};
	render(){
		let listHouse = this.props.listHouse
		let arr2 = [...listHouse, ...listHouse, ...listHouse, ...listHouse, ...listHouse]
		return(
			<div className="housePic">
				 <List
				    grid={{ gutter: 16, column: 4 }}
				    dataSource={arr2}
				    renderItem={item => (
				      <List.Item>
				        <Card title={item.house_name}>
				        	<Row>
				        		<Col span={10}><img src={item.banner_url} alt=""/></Col>
				        		<Col span={10}>
									<p>可投放设备:{item.advice_num}</p>
									<p><del>原价:￥{item.original_price}</del><b>{item.market_price}/天/台</b></p>
									
				        		</Col>
				        		<Col span={4}>
									<p><Button type="primary" onClick={this.PutInBtn.bind(this,item.id)}>投放</Button></p>
				        		</Col>
				        	</Row>
				        </Card>
				      </List.Item>
				    )}
				  />
			</div>
		)
	}
}

export default ListGrid;