import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Login from '../page/login/login';
import Home from '../page/production/home';
import Template from '../page/production/template';
import PutIn from '../page/production/putIn';
import User from '../page/user/user';
import Detail from '../page/production/detail';
import Index from '../page/production/index';

function App(props){
	return(
		<div>
			{props.children}
		</div>
		)
}



const routes = (
	<Router history={browserHistory} component={App}>
		<Route path="/" component={Login}></Route>
		<Route path="/home"  component={Home} >
			<Route path="/index" component={Index} />
			<Route path="/detail" component={Detail} />
			<Route path="/putIn" component={PutIn} />
			<Route path="/template" component={Template} />
			<Route path="/user" component={User} />
		</Route>	
	</Router>

	);
export default routes;