import React,{Component} from "react"
import fetchRequest from '../../utility/fetch'
import { Table } from 'antd';

/*const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="www.baidu.com">{text}</a>,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];*/

class TableGrid extends Component{
  state = {
     columns:[],
     data:[]
  };
  componentDidMount(){
    fetchRequest('api/v1/vpis/order/page?locale=ch&page_size=10','GET').then(resp=>{
      console.log(resp)    
    })
  }
	render(){
		return(
			<Table columns={this.state.columns} dataSource={this.state.data} bordered title={() => 'Header'} footer={() => 'Footer'} />
		)
	}
}

export default TableGrid;