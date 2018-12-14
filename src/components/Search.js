import React,{Component} from "react"
import { Input } from 'antd';

const Search = Input.Search;

class SearchComponent extends Component{
	render(){
		return(
			<div>
				<Search  placeholder="请输入小区的名字" enterButton="Search" size="large" onSearch={value => console.log(value)} />
			</div>
			)
	}
}

export default SearchComponent;