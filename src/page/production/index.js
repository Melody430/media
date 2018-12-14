import React,{Component} from 'react'
import Carousel from '../../components/Carousel'
import Search from '../../components/Search'
import List from '../../components/List'
import fetchRequest from '../../utility/fetch'
import '../../style/home.css'

class Index extends Component{
	static defaultProps ={
		banner:[],
		listHouse:[]
	};

	 constructor() {
        super();
        //2、加载默认状态
        this.state = {banner:[],listHouse:[]}
    }
 	
	componentDidMount(){
		
		//获取轮播图
		fetchRequest('api/v1/vpis/houses/find/banner?locale=ch','POST').then(resp=>{
			this.setState({banner:resp.data}) 
			console.log(resp.data)
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
			console.log(this.state.listHouse)
		})
     
	};
	render(){
		return(
			<div>
				<Carousel loopBanner={this.state.banner}/>
				<div className="main">
					<Search/>
					<List listHouse={this.state.listHouse}/>
					
				</div>
				
			</div>
		)
		
	}
}

export default Index;