import React,{Component} from 'react'
import '../../style/detail.css'
import Search from '../../components/Search'
import List from '../../components/List'
import fetchRequest from '../../utility/fetch'
import { Card,	Row, Col,Button} from 'antd';

class DetailHouse extends Component{
	static defaultProps ={
		listHouse:[],
		houseId:0
	};
	 constructor() {
        super();
        //2、加载默认状态
        this.state = {banner:[],listHouse:[]}
    }
 	
	componentDidMount(){
		fetchRequest('api/v1/vpis/houses/find/detail','POST',{id:0}).then(resp=>{
			console.log(resp)
		})
		fetchRequest('api/v1/vpis/houses/page','POST',{
			"area_code":"310101",
			"latitude_y": 0,
  			"longitude_x": 0,
			"page":{
				"page_size":20,
				"page_number":0,
				"sort_fields": [
				      {
				        "direction": "ASC",
				        "field_name": "string"
				      }]
				  },
			"type" : 0
				}).then(resp=>{
					
			this.setState({listHouse:resp.data.list}) 
			
		})
	};
	render(){
		
		return(
			<div className="detailWrap">
				<Search/>
				<div className="title"><img src="http://phchf9afi.bkt.clouddn.com/vpis_image_1e360b1b1379413bb18e6b5713b4d6ee.jpg" alt=""/></div>
				<div className="houseName">
					<Card  title="中央御景" bordered={true} >
						<Row>
							<Col span={12}><p>可投放广告副数：<b>100副</b></p></Col>
							<Col span={12}><Button type="primary">投放</Button></Col>
						</Row>
						
					</Card>
				</div>
				<div className="houseDetail">
					 <Card title="楼宇信息" bordered={true} >
					 <Row>
							<Col span={12}>小区均价：</Col>
							<Col span={12}>住户年龄：</Col>
							<Col span={12}>居住人口：</Col>
							<Col span={12}>总住户数：</Col>
							<Col span={12}>曝光人流量：</Col>
							<Col span={12}>入住时间：</Col>
						</Row>
				    </Card>
				</div>
				<div>
					<p>附近推荐</p>
					<List listHouse={this.state.listHouse}/>
				</div>
				
			</div>
			)
	}
}

export default DetailHouse;